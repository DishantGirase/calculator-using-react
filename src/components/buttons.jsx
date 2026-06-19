import styles from "./buttons.module.css";
const Buttons = (props) => {
  const buttonNames = props.buttonsArray || [];
  return (
    <>
      {buttonNames.map((name) => (
        <button className={styles.buttons}>{name}</button>
      ))}
    </>
  );
};
export default Buttons;
