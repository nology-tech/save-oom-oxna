import { useEffect } from "react";
import useTimer from "../../hooks/useTimer";
import "./Timer.scss";

const Timer = ({ startTime, handleGameEnd }) => {
  const [isFinished, counter] = useTimer(startTime);

  useEffect(() => {
    if (isFinished) {
      handleGameEnd();
    }
  }, [isFinished]);

  return (
    <h1 className="timer">
      {counter}
      <span className="timer__s">s</span>
    </h1>
  );
};

export default Timer;
