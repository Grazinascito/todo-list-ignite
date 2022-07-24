import styles from "./Input.module.css";
import plus from "../../assets/plus.svg"

export const Input = () => {
  return (
    <div className={styles.InputContent}>
      <div>
        <input type="text" placeholder="Adicione uma nova tarefa" />
      </div>
      <div>
        <button>Criar <img src={plus} alt="plus sign" /> </button>
      </div>
    </div>
  );
};
