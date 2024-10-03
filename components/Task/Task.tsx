import styles from "./styles.module.css";
import Link from "next/link";

type TaskProps = {
  id: string;
  taskTitle: string;
  taskText: string;
  isCompleted: boolean;
};

const Task = ({ id, taskTitle, taskText, isCompleted }: TaskProps) => {
  return (
    <Link href={`/task/${id}`} className={styles.main}>
      <h3>{taskTitle}</h3>
      <div>{taskText}</div>
      <div className={styles.TaskCompletionWrapper}>
        <span>Is complete?</span>{" "}
        <div
          className={
            isCompleted
              ? styles.TaskIsNotCompletedindicator
              : styles.TaskIsNotCompletedindicator
          }
        ></div>
      </div>
    </Link>
  );
};

export default Task;
