import { Task as TaskType } from "../../types/tasks";
import Task from "../Task/Task";
import styles from "./styles.module.css";

type TasksWrapperProps = {
  tasks: TaskType[];
};

const TasksWrapper = ({ tasks }: TasksWrapperProps) => {
  return (
    <div className={styles.main}>
      {tasks.map((task) => {
        return (
          <Task
            id={task.id}
            key={task.id}
            taskTitle={task.taskTitle}
            taskText={task.taskText}
            isCompleted={task.isCompleted}
          />
        );
      })}
    </div>
  );
};

export default TasksWrapper;
