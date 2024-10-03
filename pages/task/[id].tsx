import React, { useEffect, useState } from "react";
import TaskDisplay from "../../components/TaskDisplay/TaskDisplay";
import axios from "axios";
import { useRouter } from "next/router";
import { Task } from "../../types/tasks";
import PageTemplate from "../../components/PageTemplate/PageTemplate";

const TaskPage = () => {
  const [task, setTask] = useState<Task | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchTask = async () => {
      if (router.query.id) {
        try {
          const fetchedInventory = await axios.get(
            `${process.env.SERVER_URL}/tasks/${router.query.id}`
          );
          console.log(fetchedInventory.data.task);
          setTask(fetchedInventory.data.task);
        } catch (err) {
          console.error("Error fetching task:", err);
        }
      }
    };

    fetchTask();
  }, [router.query.id]);

  return (
    <PageTemplate>
      {task && (
        <TaskDisplay
          id={task.id}
          title={task.taskTitle}
          text={task.taskText}
          isCompleted={false}
        />
      )}
    </PageTemplate>
  );
};

export default TaskPage;
