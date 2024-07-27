import classNames from "../../../utils/classNames";
import { useTranslation } from "react-i18next";

const MoreDemoCard = ({ onClick }) => {
  const [t] = useTranslation();

  return (
    <div className="text-primary lg:p-28 bg-DFEFFF h-screen flex flex-col items-center">
      <div
        className={classNames(
          "rounded-xl flex my-8 font-sans bg-white p-5 lg:px-8 shadow-xl items-center justify-items-center gap-1 border-1 border-coolGray"
        )}
      >
        <button
          className="bg-bgBlue font-cunia py-2 px-6 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue mt-4"
          href="https://earneasy24.com/"
          target="_blank"
          rel="noreferrer"
          onClick={onClick}
        >
          More Demo
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
  );
};
export default MoreDemoCard;
