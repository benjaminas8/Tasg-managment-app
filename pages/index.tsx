import { useEffect, useState } from "react";

import Modal from "@/components/Modal/Modal";
import axios from "axios";

import TasksWrapper from "@/components/TasksWrapper/TasksWrapper";
import { Task as TaskType } from "@/types/tasks";
import { useRouter } from "next/router";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import cookie from "js-cookie";

export default function Home() {
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const jwt = cookie.get("task_manager_app_jwt");
  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3003/tasks");

      setTasks(response.data.tasks);
      console.log(response.data.tasks);
    } catch (err) {
      console.log(err);
      setModalOpen(true);
    }
  };

  useEffect(() => {
    if (!jwt) {
      router.push("/login");
    }

    fetchTasks();
  }, []);

  return (
    <PageTemplate>
      <TasksWrapper tasks={tasks} />
      {isModalOpen && (
        <Modal
          text="Error"
          onModalClose={() => {
            setModalOpen(false);
          }}
        />
      )}
    </PageTemplate>
  );
}
