import { useEffect, useState } from "react";

// counts down to 0 from a specified number of seconds
// returns a boolean for isFinished and the seconds remaining
const useTimer = (time) => {
  const [seconds, setSeconds] = useState(time ?? 60);

  useEffect(() => {
    let interval = null;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, []);

  return [seconds <= 0, seconds];
};

export default useTimer;
