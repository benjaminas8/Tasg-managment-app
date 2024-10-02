import React from "react";
import styles from "./styles.module.css";

type TaskDisplayProps = {
  title: string;
  text: string;
  // isCompleted: boolean;
};

const TaskDisplay = ({ title, text }: TaskDisplayProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.taskWrapper}>
        <h3 className={styles.taskTitle}>{title}</h3>
        <p className={styles.taskText}>{text}</p>
        <div className={styles.taskButtonWrapper}>
          <button>DELETE</button>
          <button className={styles.taskButton}>Mark as Complete</button>
        </div>
      </div>
      <div className={styles.commentWrapper}>
        <div className={styles.commentName}>User Name</div>
        <div className={styles.commentText}>progress comment</div>
      </div>
    </div>
  );
};

export default TaskDisplay;
