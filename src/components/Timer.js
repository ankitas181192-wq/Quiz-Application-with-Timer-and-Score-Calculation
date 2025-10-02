import React, { useEffect } from "react";

function Timer({ time, setTime }) {
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time, setTime]);

  return <span className="timer">{time < 10 ? `0${time}` : time}</span>;
}

export default Timer;
