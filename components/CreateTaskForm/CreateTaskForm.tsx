import { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const CreateTaskForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const router = useRouter();

  const jwt = cookie.get("task_manager_app_jwt");

  const addTask = async () => {
    try {
      const body = {
        taskTitle: title,
        taskText: text,
      };

      const headers = {
        authorization: jwt,
      };

      const response = await axios.post("http://localhost:3003/tasks", body, {
        headers,
      });

      if (response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Create task</h1>
      <input
        value={title}
        placeholder="Task title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={text}
        placeholder="Task text"
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        isLoading={false}
        title="Create Task"
        onClick={() => {
          addTask();
        }}
      />
    </div>
  );
};

export default CreateTaskForm;
