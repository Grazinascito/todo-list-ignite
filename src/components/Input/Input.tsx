import styles from "./Input.module.css";
import { useState, FormEvent, ChangeEvent } from "react";
import { TodoList } from "../TodoList/TodoList";
import { PlusCircle } from "phosphor-react";

interface InputProps {
  name: string;
  id: number;
  isChecked: boolean;
}

export const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskValue, setTaskValue] = useState<Array<InputProps>>([]);

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTaskValue = (event: FormEvent) => {
    event.preventDefault();
    const randomId = Math.random();

    if (!inputValue) {
      return;
    }

    setTaskValue([
      ...taskValue,
      { name: inputValue, id: randomId, isChecked: false },
    ]);

    setInputValue("");
  };

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={handleAddTaskValue} className={styles.inputContent}>
        <div>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={inputValue}
            onChange={handleInputValue}
          />
        </div>
        <div>
          <button type="submit">
            Criar <PlusCircle size={18} />
          </button>
        </div>
      </form>
      <TodoList
        setTaskValue={setTaskValue}
        taskValue={taskValue}
        taskValueLength={taskValue.length}
      />
    </div>
  );
};
