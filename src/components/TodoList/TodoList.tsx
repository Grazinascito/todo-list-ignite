import styles from "./TodoList.module.css";
import clipboardIcon from "../../assets/Clipboard.svg";
import uncheckIcon from "../../assets/uncheck.svg";
import checkedIcon from "../../assets/checked.svg";
import { useEffect, useReducer, useState } from "react";
import { Trash } from "phosphor-react";
import tasksReducer from "../../Reducers/TaskReducer";
import { InputProps } from "../Input/Input";

interface TodoListProps {
  taskValue: {
    name: string;
    id: number;
    isChecked: boolean;
  }[];
  taskValueLength: number;
  dispatch: any;
}

export const TodoList = ({
  taskValue,
  taskValueLength,
  dispatch,
}: TodoListProps) => {
  const [isCompleted, setIsCompleted] = useState(0);

  const handleIsChecked = (id: number) => {
    dispatch({
      type: "check",
      task: taskValue,
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
    dispatch({
      type: "delete",
      task: taskValue,
      id: id,
    });
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
