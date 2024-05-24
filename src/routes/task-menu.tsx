import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import TaskMenuTable from "../components/task-menu-table";
import styled from "styled-components";

export interface TaskType {
  difficulty: number;
  fileID: string;
  fileName: string;
  readOnly: boolean;
}

const Wrapper = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;

export default function TaskMenu() {
  const [taskOfListFirst, setTaskOfListFirst] = useState<TaskType[]>([]);
  const [taskOfListSecond, setTaskOfListSecond] = useState<TaskType[]>([]);
  //const [taskOfListThird, setTaskOfListThird] = useState<TaskType[]>([]);
  const getTaskData = async (week_num: number) => {
    const TaskQuery = query(collection(db, `week${week_num}`));
    const snapshot = await getDocs(TaskQuery);
    const tasks = snapshot.docs.map((doc) => {
      const { difficulty, fileID, fileName, readOnly } = doc.data();
      return { difficulty, fileID, fileName, readOnly };
    });
    if (week_num === 1) {
      setTaskOfListFirst(tasks);
    } else if (week_num === 2) {
      setTaskOfListSecond(tasks);
    } else if (week_num === 3) {
      //setTaskOfListThird(tasks);
    }
  };

  useEffect(() => {
    getTaskData(1);
    getTaskData(2);
  }, []);

  return (
    <Wrapper>
      <TaskMenuTable week="1" value={taskOfListFirst}></TaskMenuTable>
      <TaskMenuTable week="2" value={taskOfListSecond}></TaskMenuTable>
    </Wrapper>
  );
}
