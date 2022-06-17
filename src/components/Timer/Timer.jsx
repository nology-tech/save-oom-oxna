import { useEffect } from "react";
import useTimer from "../../hooks/useTimer";
import "./Timer.scss";

const Timer = ({ startTime, onTimeUp }) => {
  const [isFinished, counter] = useTimer(startTime);

  useEffect(() => {
    if (isFinished) {
      onTimeUp();
    }
  }, [isFinished]);

  return (
    <h1 className="timer">
      {counter}
      <span className="timer__seconds">s</span>
    </h1>
  );
};

export default Timer;
