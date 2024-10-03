import styles from "./styles.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import cookie from "js-cookie";
import { useState } from "react";

type TaskDisplayProps = {
  id: string;
  title: string;
  text: string;
  isCompleted: boolean;
};

const TaskDisplay = ({ id, title, text, isCompleted }: TaskDisplayProps) => {
  const [isTaskCompleted, setTaskCompleted] = useState(isCompleted);
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

  const toggleTaskCompletion = async () => {
    console.log("Before Update:", isTaskCompleted); // Debugging before state update
    try {
      const headers = {
        authorization: jwt,
      };

      const response = await axios.patch(
        `http://localhost:3003/tasks/${id}`,
        { isCompleted: !isTaskCompleted },
        { headers }
      );

      if (response.status === 200) {
        setTaskCompleted(!isTaskCompleted);
        console.log("After Update:", !isTaskCompleted); // Debugging after state update
      }
    } catch (err) {
      console.log("Error updating task completion:", err);
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
          <button
            className={styles.completeButton}
            onClick={toggleTaskCompletion}
          >
            {isTaskCompleted ? "Mark as Incomplete" : "Mark as Complete"}
          </button>
        </div>
        <div className={styles.TaskCompletionWrapper}>
          <span>Is complete?</span>
          <div
            className={
              isTaskCompleted
                ? styles.TaskIsCompletedindicator
                : styles.TaskIsNotCompletedindicator
            }
          ></div>
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
