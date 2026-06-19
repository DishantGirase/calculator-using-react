import styles from "./App.module.css";
import CalculatorInput from "./components/calculatorInput";
import ButtonsContainer from "./components/buttonsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <CalculatorInput></CalculatorInput>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
