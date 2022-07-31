
import "./App.css";
import global from "../src/global.css";
import { Header } from "./components/Header/Header";
import { InputForm } from "./components/Input/Input";


function App() {
  return (
    <div className={global}>
      <Header />
      <InputForm />
    </div>
  );
}

export default App;
