import styles from "./Header.module.css";
import logo from "../../assets/Logo.svg";

export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div>
        <img src={logo} alt="todo logo" />
      </div>
    </header>
  );
};
