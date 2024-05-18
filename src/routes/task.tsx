import { collection, query } from "firebase/firestore";

export default function Task() {
  const getTaskData = async () => {
    const TaskQuery = query(collection(db, "week1"));
  };
  return <h1>Task</h1>;
}
