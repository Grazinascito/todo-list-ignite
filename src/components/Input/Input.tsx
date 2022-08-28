import styles from "./Input.module.css";
import { useState, FormEvent, ChangeEvent, useReducer } from "react";
import { TodoList } from "../TodoList/TodoList";
import { PlusCircle } from "phosphor-react";
import tasksReducer from "../../Reducers/TaskReducer";

export interface InputProps {
  name: string;
  id: number;
  isChecked: boolean;
}

export const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  
  const initialTasks: Array<InputProps> = [];
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddTaskValue = (event: FormEvent) => {
    event.preventDefault();
    const randomId = Math.random();
    if (!inputValue) {
      return;
    }
    console.log(inputValue)
    dispatch({
      type: "added",
      name: inputValue,
      id: randomId,
      boolean: false,
    });
    
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
        taskValue={tasks}
        taskValueLength={tasks.length}
        dispatch={dispatch}
      />
    </div>
  );
};
