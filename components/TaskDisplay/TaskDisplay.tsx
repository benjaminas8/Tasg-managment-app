import React from "react";
import styles from "./styles.module.css";

type TaskDisplayProps = {
  title: string;
  text: string;
  // isCompleted: boolean;
};

const TaskDisplay = ({ title, text }: TaskDisplayProps) => {
  return (
    <div className={styles.main}>
      <h3 className={styles.taskTitle}>{title}</h3>
      <p className={styles.taskText}>{text}</p>
      <button className={styles.taskButton}>Mark as Complete</button>
    </div>
  );
};

export default TaskDisplay;
