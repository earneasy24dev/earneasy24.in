import classNames from "../../../utils/classNames";
import DemoCompletedImg from "../../../images/demo_completed.svg";
import { errorToast } from "../../../utils/toast";
import axios from "../../../axios";

const DemoCompletedCard = ({ skipCaptcha, ...props }) => {
  const resetDemo = () => {
    axios.get("resetDemo").then((res) => {
      if (res.data.status) {
        skipCaptcha(false);
      } else {
        errorToast("Something went wrong, please try again.");
      }
    });
  };

  return (
    <div className="text-primary lg:p-28 bg-DFEFFF h-screen flex flex-col items-center">
      <div
        className={classNames(
          "rounded-xl grid grid-cols my-8 font-sans bg-white p-5 lg:px-8 shadow-xl items-center justify-items-center gap-1 border-1 border-coolGray",
          props.className
        )}
      >
        <img
          loading="lazy"
          src={DemoCompletedImg}
          alt="Demo Completed"
          className="w-80 h-36 mb-5 lg:mx-10"
        />

        <div className="text-lg lg:text-xl font-cunia text-deepBlue text-center">
          Demo Completed
        </div>
        <div className="text-gray-600 mt-2 font-semibold text-center">
          Your demo is completed, if you want to purchase the paid plan and want
          to earn real money, then please buy a paid plan by clicking on the
          button below.
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            className="bg-bgBlue font-cunia py-2 px-6 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue mt-4"
            onClick={() => resetDemo()}
          >
            Try demo work
          </button>
          <a
            className="bg-lightPink font-cunia py-2 px-6 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue mt-4"
            href="https://earneasy24.com/"
            target="_blank"
            rel="noreferrer"
          >
            View Plans
          </a>
        </div>
      </div>
    </div>
  );
};
export default DemoCompletedCard;
