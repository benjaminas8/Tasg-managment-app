import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import React, { useEffect, useState } from "react";
import TaskDisplay from "../../components/TaskDisplay/TaskDisplay";
import axios from "axios";
import { useRouter } from "next/router";
import { Task } from "../../types/tasks";

const TaskPage = () => {
  const [task, setTask] = useState<Task | null>(null);

  const router = useRouter();

  const fetchTask = async () => {
    const fetchedInventory = await axios.get(
      `http://localhost:3003/tasks/${router.query.id}`
    );
    console.log(fetchedInventory.data.task);
    setTask(fetchedInventory.data.task);
  };

  useEffect(() => {
    router.query.id && fetchTask();
  }, [router.query.id]);

  return (
    <>
      <Header />
      {task && <TaskDisplay title={task.taskTitle} text={task.taskText} />}

      <Footer copyrightTitle="© 2024 3D mess" />
    </>
  );
};

export default TaskPage;
