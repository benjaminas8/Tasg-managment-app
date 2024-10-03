import React, { useEffect, useState } from "react";
import TaskDisplay from "../../components/TaskDisplay/TaskDisplay";
import axios from "axios";
import { useRouter } from "next/router";
import { Task } from "../../types/tasks";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

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
    <PageTemplate>
      {task && (
        <TaskDisplay id={task.id} title={task.taskTitle} text={task.taskText} />
      )}
    </PageTemplate>
  );
};

export default TaskPage;
