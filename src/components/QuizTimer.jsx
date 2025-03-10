import { useEffect, useState } from "react";

export default function QuizTimer({ timeout, onTimeout }) {
  const [time, setTime] = useState(timeout);
  useEffect(() => {
    console.log("Set Timout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    console.log("Set Interval");
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress id="question-timer" value={time} max={timeout}></progress>;
}
