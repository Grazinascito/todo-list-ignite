import global from "../src/global.css";
import { Header } from "./components/Header/Header";
import { InputForm } from "./components/Input/Input";
import {LearningReducer} from "./LearningReducer"

function App() {
  return (
    <div className={global}>
      {/* <Header />
      <InputForm /> */}

      <LearningReducer />
    </div>
  );
}

export default App;
