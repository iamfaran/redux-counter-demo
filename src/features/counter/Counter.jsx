import styles from "./Counter.module.css";

export const Counter = () => {
  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value">
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {2}
        </span>
        <button className={styles.button} aria-label="Increment value">
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          type="number"
        />
        <button className={styles.button}>Add Amount</button>
        <button className={styles.asyncButton}>Add Async</button>
        <button className={styles.button}>Add If Odd</button>
      </div>
    </div>
  );
};
