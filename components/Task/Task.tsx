import styles from "./styles.module.css";
import Link from "next/link";

type TaskProps = {
  id: string;
  taskTitle: string;
  taskText: string;
};

const Task = ({ id, taskTitle, taskText }: TaskProps) => {
  return (
    <Link href={`/task/${id}`} className={styles.main}>
      <h3>{taskTitle}</h3>
      <div>{taskText}</div>
      <button>Is complete</button>
    </Link>
  );
};

export default Task;
