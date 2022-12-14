import React, { useEffect, useState } from "react";
import "./Timer.css";
export const Timer = () => {
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds == 59) {
        setMinute(minute + 1);
        setSeconds(0);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });

  function handleStop() {
    clearInterval(timer);
  }
  function handleRestart() {
    setMinute(0);
    setSeconds(0);
  }

  return (
    <div>
      <h1>Stop watch</h1>
      <div className="outerDiv">
        <div className="innerDiv">
          {minute < 10 ? "0" + minute : minute} :{" "}
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
      </div>
      <div className="btnDiv">
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};
