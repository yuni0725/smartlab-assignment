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
`;

export default function Task() {
  const [taskOfList, setTaskOfList] = useState<TaskType[]>([]);
  const getTaskData = async () => {
    const TaskQuery = query(collection(db, "week1"));
    const snapshot = await getDocs(TaskQuery);
    const tasks = snapshot.docs.map((doc) => {
      const { difficulty, fileID, fileName, readOnly } = doc.data();
      return { difficulty, fileID, fileName, readOnly };
    });
    setTaskOfList(tasks);
  };

  useEffect(() => {
    getTaskData();
  }, []);
  console.log(typeof taskOfList);

  return (
    <Wrapper>
      <TaskMenuTable week="1" value={taskOfList}></TaskMenuTable>
      <TaskMenuTable week="1" value={taskOfList}></TaskMenuTable>
      <TaskMenuTable week="1" value={taskOfList}></TaskMenuTable>
    </Wrapper>
  );
}
