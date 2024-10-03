import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import cookie from "js-cookie";

type TaskDisplayProps = {
  id: string;
  title: string;
  text: string;
  // isCompleted: boolean;
};

const TaskDisplay = ({ id, title, text }: TaskDisplayProps) => {
  const router = useRouter();

  const jwt = cookie.get("task_manager_app_jwt");

  const deleteTask = async () => {
    try {
      const headers = {
        authorization: jwt,
      };

      const response = await axios.delete(`http://localhost:3003/tasks/${id}`, {
        headers,
      });

      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.taskWrapper}>
        <h3 className={styles.taskTitle}>{title}</h3>
        <p className={styles.taskText}>{text}</p>
        <div className={styles.taskButtonWrapper}>
          <button className={styles.deleteButton} onClick={() => deleteTask()}>
            DELETE TASK
          </button>
          <button className={styles.completeButton}>Mark as Complete</button>
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
