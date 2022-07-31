import styles from "./Input.module.css";
import plus from "../../assets/plus.svg";
import { useState, FormEvent, ChangeEvent } from "react";
import { TodoList } from "../TodoList/TodoList";

interface inputProps {
  name: string;
  id: number;
  isChecked: boolean;
}

export const InputForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [finalValue, setFinalValue] = useState<Array<inputProps>>([]);

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFinalValue = (event: FormEvent) => {
    event.preventDefault();
    const randomId = Math.random();

    if (!inputValue) {
      return;
    }

    setFinalValue([...finalValue, { name: inputValue, id: randomId, isChecked: false }]);
    setInputValue("");
  };

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={handleFinalValue} className={styles.inputContent}>
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
            Criar <img src={plus} alt="plus sign" />{" "}
          </button>
        </div>
      </form>
      <TodoList setFinalValue={setFinalValue} finalValue={finalValue} finalValueLength={finalValue.length} />
    </div>
  );
};
