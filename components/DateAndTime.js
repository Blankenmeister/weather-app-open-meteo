import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import styles from "./DateAndTime.module.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  let weatherTime = weatherData.current.time;
  return (
    <div className={styles.wrapper}>
      <h2>
        {`${getWeekDay(weatherData)}, ${getTime(
          unitSystem,
          weatherTime,
          // weatherData.timezone
        )} ${getAMPM(unitSystem, weatherTime)}`}
      </h2>
    </div>
  );
};
