import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calculator}>
      <input id="calculator-input" type="text" />
      <div id="buttons-container">
        <button>c</button>
      </div>
    </div>
  );
}

export default App;
