
import "./App.css";
import global from "../src/global.css";
import { Header } from "./components/Header/Header";
import { Input } from "./components/Input/Input";


function App() {
  return (
    <div className={global}>
      <Header />
      <Input />
    </div>
  );
}

export default App;
