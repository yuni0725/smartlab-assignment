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

  return (
    <Wrapper>
      <TaskMenuTable week="1" value={taskOfList}></TaskMenuTable>
    </Wrapper>
  );
}
