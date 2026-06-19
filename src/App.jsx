import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <input className={styles.calculatorInput} type="text" />
      <div id="buttons-container">
        <button>c</button>
      </div>
    </div>
  );
}

export default App;
