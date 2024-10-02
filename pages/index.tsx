import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import axios from "axios";
import cookie from "js-cookie";
import TasksWrapper from "@/components/TasksWrapper/TasksWrapper";
import { Task as TaskType } from "@/types/tasks";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const jwt = cookie.get("task_manager_app_jwt");

  const validateUser = async () => {
    try {
      const headers = {
        authorization: jwt,
      };

      const response = await axios.get("http://localhost:3003/login/validate", {
        headers,
      });

      if (response.status !== 200) {
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
      router.push("/login");
    }
  };

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

    validateUser();

    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <TasksWrapper tasks={tasks} />
      <Footer copyrightTitle="copyright" />
      {isModalOpen && (
        <Modal
          text="Error"
          onModalClose={() => {
            setModalOpen(false);
          }}
        />
      )}
    </>
  );
}
