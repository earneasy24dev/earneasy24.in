import { useRef, forwardRef, useImperativeHandle, useState } from "react";
import { useUser } from "../../../../hooks/use-user";

const Timer = forwardRef(({ onComplete }, ref) => {
  const { data: user } = useUser;
  const timerRef = useRef();
  const [timerText, setTimerText] = useState(0);

  useImperativeHandle(ref, () => ({
    startTimer,
    stopTimer,
  }));

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    let time = user?.captchaTime || 60;
    if (time >= 0) {
      timerRef.current = setInterval(() => {
        time -= 1;
        setTimerText(time >= 0 ? time + " s" : "0 s");

        if (time < 0) {
          clearInterval(timerRef.current);
          onComplete && onComplete();
        }
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setTimerText("0 s");
  };

  return (
    <div className="float-right w-auto content-center px-3 mr-2 bg-deepBlue rounded-full shadow items-center">
      <span className="text-white text-center w-full text-xs lg:text-sm">
        {timerText}
      </span>
    </div>
  );
});

export default Timer;
