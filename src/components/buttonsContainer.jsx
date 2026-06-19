import Buttons from "./buttons";
import styles from "./buttonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonsArray = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      <Buttons buttonsArray={buttonsArray} />
    </div>
  );
};

export default ButtonsContainer;
