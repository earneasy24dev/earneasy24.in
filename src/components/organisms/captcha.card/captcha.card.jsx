import classNames from "../../../utils/classNames";
import Captcha from "../../../images/captcha.png";
import Correct from "../../../images/checkmark.svg";
import Incorrect from "../../../images/remove.svg";
import Skip from "../../../images/right-arrow.svg";
import { useEffect, useRef, useState } from "react";
import axios from "../../../axios";
import Loader from "../../atoms/loader/loader";
import { errorToast, successToast, warningToast } from "../../../utils/toast";
import DemoUserWhatsappModal from "../demo-user-whatsapp-modal";
import Timer from "./timer/timer";
import DemoCompletedCard from "./DemoCompletedCard";
import { useUser } from "../../../hooks/use-user";
import { useHistory } from "react-router-dom";
import MoreDemoCard from "./MoreDemoCard";
import { useMemo } from "react";

const CaptchaCard = (props) => {
  const history = useHistory();
  const timerRef = useRef();
  const startRef = useRef(false);
  const { data: user } = useUser();

  const [loading, setLoading] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [skipDisabled, setSkipDisabled] = useState(false);
  const [captcha, setCaptcha] = useState({
    image: Captcha,
    rightCount: 0,
    wrongCount: 0,
    skipCount: 0,
  });

  let extraTimeTimer = null;

  const isDemoCompleted = useMemo(() => {
    if (
      user?.planName === "Test" &&
      captcha.rightCount + captcha.wrongCount + captcha.skipCount >= 20
    ) {
      return true;
    }
    return false;
  }, [captcha]);

  const isShowDemoCompleted = useMemo(() => {
    if (
      user?.planName === "Test" &&
      captcha.rightCount + captcha.wrongCount + captcha.skipCount == 5
    ) {
      return true;
    }
    return false;
  }, [captcha]);

  useEffect(() => {
    if (!startRef.current && user && user._id) startWork();
  }, [user]);

  useEffect(() => {
    if (isDemoCompleted || isShowDemoCompleted) stopWork();
  }, [isDemoCompleted, isShowDemoCompleted]);

  const getCaptcha = () => {
    axios
      .post("getCaptcha", { userId: user?._id })
      .then((response) => {
        setCaptchaText("");
        if (
          localStorage.getItem("session") &&
          response.data?.sessionToken !== localStorage.getItem("session")
        ) {
          localStorage.clear();
          history.replace("/login");
          return;
        }
        setCaptcha(response.data);

        timerRef?.current?.startTimer();
      })
      .catch((err) => console.log(err));
  };

  const skipCaptcha = (showToast = true) => {
    setSkipDisabled(true);
    setLoading(true);
    axios
      .post("skipCaptcha", { userId: user?._id })
      .then((response) => {
        showToast && warningToast("Skipped...", 2000);
        setCaptchaFunc(response.data);
      })
      .catch((err) => setSkipDisabled(false));
  };

  const submitCaptcha = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);
    setLoading(true);
    axios
      .post("submitCaptcha", {
        userId: user?._id,
        captchaId: captcha._id,
        captchaText,
      })
      .then((response) => {
        response.data.isRight
          ? successToast("Right answer", 2000)
          : errorToast("Wrong answer", 2000);

        setCaptchaFunc(response.data);
      })
      .catch((err) => setSubmitDisabled(false));
  };

  const setCaptchaFunc = (data) => {
    if (
      localStorage.getItem("session") &&
      data?.sessionToken !== localStorage.getItem("session")
    ) {
      localStorage.clear();
      history.replace("/login");
      return;
    }

    if (extraTimeTimer) {
      clearTimeout(extraTimeTimer);
    }

    extraTimeTimer = setTimeout(() => {
      setCaptchaText("");
      setCaptcha(data);
      setSubmitDisabled(false);
      setSkipDisabled(false);
      timerRef?.current?.startTimer();
      setLoading(false);
    }, (user?.extraTime || 0) * 1000);
  };

  const startWork = () => {
    startRef.current = true;
    getCaptcha();
  };

  const stopWork = () => {
    timerRef?.current?.stopTimer();
  };

  if (isShowDemoCompleted) {
    return <MoreDemoCard onClick={() => skipCaptcha(false)} />;
  }

  return (
    <>
      {isDemoCompleted ? (
        <DemoCompletedCard skipCaptcha={skipCaptcha} />
      ) : (
        <div
          className={classNames(
            "rounded-xl grid grid-cols my-8 font-sans bg-white p-5 lg:px-8 shadow-xl items-center justify-items-center gap-1",
            props.className
          )}
        >
          {loading ? (
            <Loader />
          ) : (
            <img
              loading="lazy"
              key={captcha?.image}
              src={captcha?.image}
              loader={<Loader />}
              alt="Captcha"
              className="w-80 h-36 mb-5 lg:mx-10 rounded-xl border-1 border-coolGray shadow"
            />
          )}
          <div className="flex justify-between content-center items-center w-full">
            <div className="flex flex-col">
              <div className="text-start text-lightPink text-9 lg:text-sm float-left">
                * {captcha?.type}
              </div>
              {user?.planName === "Test" && (
                <div className="text-start text-lightPink text-9 lg:text-sm float-left">
                  * {captcha?.length}
                </div>
              )}
            </div>
            <Timer ref={timerRef} onComplete={() => skipCaptcha(false)} />
          </div>
          <div className="w-full grid grid-cols-5 gap-4 text-black px-4 py-3 bg-F5F8FF rounded-xl shadow-lg mt-2 items-center">
            <form
              className="col-span-4"
              id="form"
              onSubmit={(e) => submitCaptcha(e)}
            >
              <input
                type="text"
                placeholder="Enter Captcha"
                className="w-full bg-F5F8FF"
                value={captchaText}
                onChange={(e) => setCaptchaText(e.target.value)}
              />
            </form>

            <button
              className="rounded-full py-px bg-deepBlue hover:bg-brightYellow shadow-md float-right col-span-1 cursor-pointer items-center"
              onClick={() => skipCaptcha()}
              disabled={skipDisabled}
            >
              <div className="text-xs lg:text-sm py-px text-white text-center">
                Skip
              </div>
            </button>
          </div>
          <div className="flex lg:flex-col-2 gap-10 my-5">
            <button
              className="rounded-full px-6 text-center py-2 font-poppinsbold text-15 text-white border bg-deepBlue hover:bg-brightYellow shadow-lg"
              type="submit"
              form="form"
              disabled={submitDisabled}
            >
              Submit
            </button>
          </div>
          <div className="flex flex-col-5 lg:gap-5 gap-2 text-13 items-center ">
            {/* <img loading="lazy" 
          alt="Natacha"
          src={Start}
          className="w-6 h-6 rounded-full shadow-md cursor-pointer"
          onClick={() => startWork()}
        /> */}
            <div className="py-1 shadow-md px-2 bg-bgWhite text-black border-1 border-coolGray rounded-lg flex flex-col-2 gap-2 items-center justify-items-center">
              <div>
                <img
                  loading="lazy"
                  alt="Natacha"
                  src={Correct}
                  className="w-5 h-5"
                />
              </div>
              <div className="text-center">{captcha.rightCount}</div>
            </div>
            <div className="py-1 shadow-md px-2 bg-bgWhite text-black border-1 border-coolGray rounded-lg flex flex-col-2 gap-2 items-center justify-items-center">
              <div>
                <img
                  loading="lazy"
                  alt="Natacha"
                  src={Incorrect}
                  className="w-5 h-5"
                />
              </div>
              <div className="text-center">{captcha.wrongCount}</div>
            </div>

            <div className="py-1 shadow-md px-2 bg-bgWhite text-black border-1 border-coolGray rounded-lg flex flex-col-2 gap-2 items-center justify-items-center">
              <div>
                <img
                  loading="lazy"
                  alt="Natacha"
                  src={Skip}
                  className="w-5 h-5"
                />
              </div>
              <div className="text-center">{captcha.skipCount}</div>
            </div>
            {/* <img loading="lazy" 
          alt="Natacha"
          src={Stop}
          className="w-6 h-6 rounded-full shadow-md cursor-pointer"
          onClick={() => stopWork()}
        /> */}
          </div>

          <div className="mt-4 text-center px-12 py-2 text-sm bg-gradient-to-r from-darkBlue to-deepBlue text-white border-0 font-medium font-poppinsbold border-Gold my-2 shadow-xl rounded-full">
            Total earning - {captcha?.totalEarning || 0}$
          </div>

          <div className="mt-8 text-center text-coolGray text-11 lg:text-sm">
            <span className="text-primary">*</span> All words are case
            sensitive.
          </div>
          <div className="text-center text-coolGray text-11 lg:text-sm">
            <span className="text-primary">*</span> Calculative captchas must be
            solved.
          </div>
          <div className="text-center text-coolGray text-11 lg:text-sm">
            <span className="text-primary">*</span> Length of captchas will be
            between 6 to 12 charachters.
          </div>
          <div className="text-center text-coolGray text-11 lg:text-sm">
            <span className="text-primary">*</span> There result can also be
            negative numbers eg. (5 - 8 = -3).
          </div>

          {user?.planName === "Test" && (
            <DemoUserWhatsappModal onComplete={() => startWork()} />
          )}
        </div>
      )}
    </>
  );
};
export default CaptchaCard;
