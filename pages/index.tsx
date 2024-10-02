import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Modal from "@/components/Modal/Modal";
import axios from "axios";
import TasksWrapper from "@/components/TasksWrapper/TasksWrapper";
import { Task as TaskType } from "@/types/tasks";

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

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
