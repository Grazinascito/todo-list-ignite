import styles from "./TodoList.module.css";
import clipboardIcon from "../../assets/Clipboard.svg";
import uncheckIcon from "../../assets/uncheck.svg";
import checkedIcon from "../../assets/checked.svg";
import { useEffect, useReducer, useState } from "react";
import { Trash } from "phosphor-react";
import tasksReducer from "../../Reducers/TaskReducer";

interface TodoListProps {
  taskValue: {
    name: string;
    id: number;
    isChecked: boolean;
  }[];
  taskValueLength: number;
  setTaskValue?: Function;
  dispatch: any;
  tasks: any;
}

export const TodoList = ({
  taskValue,
  taskValueLength,
  setTaskValue,
  dispatch,
  tasks,
}: TodoListProps) => {
  const [isCompleted, setIsCompleted] = useState(0);

  const handleIsChecked = (id: number) => {
    console.log(tasks.filter((task: any) => task.isChecked))
    dispatch({
      type: "check",
      task: tasks,
      id: id,
    });
  };

  const handleAmountOfChecked = () => {
    const filterCompleted = taskValue.filter((task) => {
      if (task.isChecked) {
        return task;
      }
    });

    setIsCompleted(filterCompleted.length);
  };

  useEffect(() => {
    handleAmountOfChecked();
  }, [taskValue]);

  const handleDeleteTask = (id: number) => {
    const taskWithoutDeletedOne = taskValue.filter((task) => {
      if (task.id !== id) {
        return task;
      }
    });

    // setTaskValue(taskWithoutDeletedOne);
  };

  return (
    <div className={styles.listContent}>
      <div className={styles.listContentStatus}>
        <p>
          Tarefas criadas <span>{taskValueLength}</span>
        </p>
        <p>
          Concluídas
          <span>
            {isCompleted} de {taskValueLength}
          </span>
        </p>
      </div>

      {taskValueLength == 0 ? (
        <div className={styles.hasNoValue}>
          <img src={clipboardIcon} />
          <div>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <ul>
          {taskValue.map((value) => {
            return (
              <li key={value.id}>
                <div onClick={() => handleIsChecked(value.id)}>
                  <img src={value.isChecked ? checkedIcon : uncheckIcon} />
                  <p
                    className={
                      value.isChecked
                        ? styles.lineThrough
                        : styles.noLineThrough
                    }
                  >
                    {value.name}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteTask(value.id)}
                  className={styles.deleteIcon}
                >
                  <Trash color="#808080" size={24} />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
