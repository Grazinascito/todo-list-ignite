import styles from "./TodoList.module.css";
import clipboardIcon from "../../assets/Clipboard.svg";
import uncheckIcon from "../../assets/uncheck.svg";
import checkedIcon from "../../assets/checked.svg";
import deleteIcon from "../../assets/deleteIcon.svg";
import { useEffect, useState } from "react";

interface TodoListProps {
  finalValue: {
    name: string;
    id: number;
    isChecked: boolean;
  }[];
  finalValueLength: number;
  setFinalValue: Function;
}
export const TodoList = ({
  finalValue,
  finalValueLength,
  setFinalValue,
}: TodoListProps) => {
  const [isCompleted, setIsCompleted] = useState(0);
  const handleIsChecked = (id: number) => {
    const mappedList = finalValue.map((value) => {
      if (value.id === id) {
        return { ...value, isChecked: !value.isChecked };
      } else {
        return value;
      }
    });

    setFinalValue(mappedList);
  };

  const handleAmountOfChecked = () => {
    const filterCompleted = finalValue.filter((task) => {
      if (task.isChecked) {
        return task;
      }
    });

    setIsCompleted(filterCompleted.length);
  };

  useEffect(() => {
    handleAmountOfChecked();
  }, [finalValue]);

  const handleDeleteTask = (id: number) => {
    const taskWithoutDeletedOne = finalValue.filter((task) => {
      if (task.id !== id) {
        return task;
      }
    });

    setFinalValue(taskWithoutDeletedOne);
  };

  return (
    <div className={styles.listContent}>
      <div className={styles.listContentStatus}>
        <p>
          Tarefas criadas <span>{finalValueLength}</span>
        </p>
        <p>
          Concluídas <span>{isCompleted} de {finalValueLength}</span>
        </p>
      </div>

      {finalValueLength == 0 ? (
        <div className={styles.hasNoValue}>
          <img src={clipboardIcon} alt="" />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <ul>
          {finalValue.map((value) => {
            return (
              <li key={value.id}>
                <div onClick={() => handleIsChecked(value.id)}>
                  <img src={value.isChecked ? checkedIcon : uncheckIcon} />
                  <p className={value.isChecked ? styles.lineThrough:styles.noLineThrough}>{value.name}</p>
                </div>
                <div
                  onClick={() => handleDeleteTask(value.id)}
                  className={styles.deleteIcon}
                >
                  <img src={deleteIcon} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
