import styles from "./styles.module.css";

type TaskProps = {
  taskTitle: string;
  taskText: string;
};

const Task = ({ taskTitle, taskText }: TaskProps) => {
  return (
    <div className={styles.main}>
      <h3>{taskTitle}</h3>
      <div>{taskText}</div>
      <button>Is complete</button>
    </div>
  );
};

export default Task;
