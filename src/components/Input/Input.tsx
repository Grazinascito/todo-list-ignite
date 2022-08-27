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
  // const [taskValue, setTaskValue] = useState<Array<InputProps>>([]);
  const initialTasks = [] as any;
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

    dispatch({
      type: "added",
      name: inputValue,
      id: randomId,
      boolean: false,
    });
    console.log(tasks);
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
        // setTaskValue={setTaskValue}
        taskValue={tasks}
        taskValueLength={tasks.length}
        dispatch={dispatch}
        tasks={tasks}
      />
    </div>
  );
};
