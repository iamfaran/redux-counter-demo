import styles from "./Counter.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment } from "./counterSlice";

export const Counter = () => {
  console.log("render");

  const dispatch = useDispatch();

  const count = useSelector((state) => {
    console.log(state.counter.value);
    return state.counter.value;
  });

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} aria-label="Decrement value">
          -
        </button>
        <span aria-label="Count" className={styles.value}>
          {count}
        </span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment());
          }}
        >
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
