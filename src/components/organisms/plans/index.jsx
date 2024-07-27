import { usePlans } from "../../../hooks/use-plans";
import BestOffer from "../../../images/best_offer.svg";
import BestValue from "../../../images/best_value.svg";
import Regular from "../../../images/regular-plan.svg";
import TopSelling from "../../../images/top-selling.svg";
import BestValue2 from "../../../images/best-value.svg";
import Free from "../../../images/free.svg";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Card from "../../atoms/card/card";
import { useWebsiteContent } from "../../../hooks/use-website-content";
import { useMemo, useState } from "react";
import InfoIcon from "@material-ui/icons/Info";
import { IconButton, Dialog } from "@material-ui/core";

const Plans = ({ plansRef }) => {
  //dialog opening states
  const [goldPlanDialogOpen, setGoldPlanDialogOpen] = useState(false);
  const [platinumPlanDialogOpen, setPlatinumPlanDialogOpen] = useState(false);
  const [silverPlusPlanDialogOpen, setSilverPluslanDialogOpen] = useState(
    false
  );

  let colourCount = 1;

  const [t, i18n] = useTranslation();

  console.log("t", t);

  console.log("i18n", i18n);
  console.log("language", i18n?.language);

  let currentLanguage = i18n?.language;

  const { data: websiteContent } = useWebsiteContent();

  const { data: plans } = usePlans();

  const normalPlans = useMemo(() => {
    return plans?.filter(
      (p) => !["Test", "Gold", "Platinum"].includes(p?.name)
    );
  }, [plans]);

  const isGoldPlanActivated = useMemo(() => {
    return plans?.some((p) => p.name === "Gold" && p.isActive);
  }, [plans]);

  const isPlatinumPlanActivated = useMemo(() => {
    return plans?.some((p) => p.name === "Platinum" && p.isActive);
  }, [plans]);

  //dialog closing function for the plans
  const handleGoldPlanDialogClick = () => {
    setGoldPlanDialogOpen(!goldPlanDialogOpen);
  };

  const handlePlatinumPlanDialogClick = () => {
    setGoldPlanDialogOpen(!platinumPlanDialogOpen);
  };

  const handleSilverPlusPlanDialogClick = () => {
    setGoldPlanDialogOpen(!silverPlusPlanDialogOpen);
  };

  return (
    <div className="bg-bgBlue px-10 py-24 " ref={plansRef}>
      <div className="flex justify-center mb-16">
        <span className="text-white text-center text-40 lg:text-54 font-cunia">
          {t("Subscribe_To_A_Plan_Start_Earning")}
          <span className="text-lightPink">!</span>
        </span>
      </div>
      <div className="grid lg:grid-cols-4 gap-10">
        <Card className="bg-lightPink">
          <img
            loading="lazy"
            src={Free}
            alt="Earn Easy Money App OR Earn Easy App"
            className="absolute -top-6 h-16 text-white  font-cunia -ml-0 -mb-10"
          />
          <div className="flex flex-col items-center justify-between h-full">
            <div className="flex flex-col items-center text-white py-10">
              <span className="text-40 font-cunia">{t("Demo")}</span>
              <span className="text-25 font-cunia mt-3 tracking-widest">
                {t("Free")}
              </span>
              {/* <span className="text-16 font-semibold font-cunia mt-3">
                {t("NO_SECURITY_DEPOSIT")}
              </span> */}
              <div className="flex flex-col  text-white ">
                <span className="text-17 mt-10 font-sans">
                  <div className="bg-white shadow-md h-3 w-3 border-1 border-white float-left mt-2 mr-3 rounded-full" />
                  {t("Demo_Account")}
                </span>
                <span className="text-17 mt-3 font-sans">
                  <div className="bg-white shadow-md h-3 w-3 border-1 border-white float-left mt-2 mr-3 rounded-full" />
                  {t("No_Earning")}
                </span>
                <span className="text-17 mt-3 font-sans">
                  <div className="bg-white shadow-md h-3 w-3 border-1 border-white float-left mt-2 mr-3 rounded-full" />
                  {t("30_Days_Validity")}
                </span>
                <span className="text-17 mt-3 font-sans">
                  <div className="bg-white shadow-md h-3 w-3 border-1 border-white float-left mt-2 mr-3 rounded-full" />
                  {t("DemoCourses")}
                </span>
                <span className="text-17 mt-3 font-sans">
                  <div className="bg-white shadow-md h-3 w-3 border-1 border-white float-left mt-2 mr-3 rounded-full" />
                  {t("Customer_Support")}
                </span>
              </div>
            </div>

            <div className="mb-8 flex flex-col items-center space-y-4">
              <Link
                to={{
                  pathname: websiteContent?.appLink,
                }}
                target="_blank"
              >
                <button className=" bg-bgBlue font-cunia py-2 px-4 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue">
                  {t("Get_Android_App")}
                </button>
              </Link>
              {websiteContent?.showIosAppButton && (
                <Link
                  to={{
                    pathname: websiteContent?.iosAppButtonLink,
                  }}
                  target="_blank"
                >
                  <button className=" bg-bgBlue font-cunia py-2 px-4 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue">
                    {t("Get_Ios_App")}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </Card>

        {isGoldPlanActivated && (
          <Card
            className={
              (colourCount + 1) % 2 === 0
                ? "bg-white border-2 border-gray-300 "
                : "bg-lightPink"
            }
          >
            <img
              loading="lazy"
              src={BestValue2}
              alt="Earn Easy Money App OR Earn Easy App"
              className="absolute -top-6 h-16 text-white  font-cunia -ml-0 -mb-10"
            />
            <div className="flex flex-col items-center justify-between h-full">
              <div
                className={`flex flex-col items-center ${
                  (colourCount + 1) % 2 === 0 ? "text-deepBlue" : "text-white"
                }`}
                style={{
                  paddingBottom: "1rem",
                  paddingTop: "2.5rem",
                }}
              >
                <span className="text-40 font-cunia">{t("Gold")}</span>
                <span className="text-25 font-cunia mt-3 tracking-widest">
                  {t("INR_6999")}
                </span>
                {/* <span className="text-16 font-cunia mt-3">
                  {t("SECURITY_DEPOSIT")}
                </span> */}

                <span
                  className={`mt-3 text-12 font-regular ${
                    (colourCount + 1) % 2 === 0
                      ? "text-lightPink"
                      : "text-white"
                  }`}
                >
                  {t("Refundable")}
                </span>
                {/* <span className="mt-3 text-10 tracking-widest">
                  {t("T_C_Applied")}
                </span> */}
                <span className="mt-3 text-lightPink text-10 tracking-widest">
                  {t("gst")}
                </span>

                <div className="text-center px-4 py-2 text-12 bg-gradient-to-r from-Gold via-lightGold to-Gold text-Brown border-0 font-poppinsbold border-Gold my-2 shadow-xl rounded-t-xl">
                  {parse(t("Silver_Start_at_just_content"))}
                </div>
                <div className="flex flex-col" style={{ padding: "0 10px" }}>
                  <span className="text-17 mt-10 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Lifetime_Validity")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Unlimited_Earning")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Unlimited_Captchas")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("oneUnlimited_Captchas_")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("2000_Captchas_INR_75")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Surveys")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Courses + (All Features )")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Govt Exam Info")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Govt Job Info")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Edu Academy Access")}
                  </span>

                  {/* new changes */}
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 mt-2 mr-3 float-left border-1 rounded-full`}
                    />
                    <p style={{ paddingLeft: "25px" }}>{t("Assuard Gift")}</p>
                  </span>

                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (colourCount + 1) % 2 === 0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Customer_Support")}
                  </span>
                </div>
              </div>

              <p
                className={`${
                  (colourCount + 1) % 2 === 0
                    ? "text-lightPink"
                    : "text-deepBlue"
                } text-sm font-semibold mx-3 text-center`}
                style={{
                  marginTop: "20px",
                  marginBottom: "30px",
                }}
              >
                {t("full_refund")}
              </p>

              <div className="mb-8 flex flex-col items-center space-y-4">
                <Link
                  to={{
                    pathname: websiteContent?.appLink,
                  }}
                  target="_blank"
                >
                  <button className=" bg-bgBlue font-cunia py-2 px-4 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue">
                    {t("Get_Android_App")}
                  </button>
                </Link>
                {websiteContent?.showIosAppButton && (
                  <Link
                    to={{
                      pathname: websiteContent?.iosAppButtonLink,
                    }}
                    target="_blank"
                  >
                    <button className=" bg-bgBlue font-cunia py-2 px-4 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue">
                      {t("Get_Ios_App")}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </Card>
        )}

        {isPlatinumPlanActivated && (
          <Card
            className={
              (isGoldPlanActivated ? colourCount + 2 : colourCount + 1) % 2 ===
              0
                ? "bg-white border-2 border-gray-300 "
                : "bg-lightPink"
            }
          >
            <img
              loading="lazy"
              src={BestOffer}
              alt="Earn Easy Money App OR Earn Easy App"
              className="absolute -top-6 h-16 text-white  font-cunia -ml-0 -mb-10"
            />
            <img
              loading="lazy"
              src={BestValue}
              alt="Earn Easy Money App OR Earn Easy App"
              className="absolute h-24 text-white  font-cunia float-right -right-1 -top-1"
            />
            <div className="flex flex-col items-center justify-between h-full">
              <div
                className={`flex flex-col items-center ${
                  (isGoldPlanActivated ? colourCount + 2 : colourCount + 1) %
                    2 ===
                  0
                    ? "text-deepBlue"
                    : "text-white"
                }`}
                style={{
                  paddingBottom: "1rem",
                  paddingTop: "2.5rem",
                }}
              >
                <span className="text-40 font-cunia">{t("Platinum")}</span>
                <span className="text-25 font-cunia mt-3 tracking-widest">
                  {t("INR_9999")}
                </span>
                {/* <span className="text-18 font-cunia mt-3">
                  {t("SECURITY_DEPOSIT")}
                </span> */}
                <span
                  className={`mt-3 text-12 font-regular ${
                    (isGoldPlanActivated ? colourCount + 2 : colourCount + 1) %
                      2 ===
                    0
                      ? "text-lightPink"
                      : "text-white"
                  }`}
                >
                  {t("Refundable")}
                </span>
                {/* <span className="mt-3 text-10 tracking-widest">
                  {t("T_C_Applied")}
                </span> */}
                <span className="mt-3 text-10 text-bgBlue tracking-widest">
                  {t("gst")}
                </span>
                <span className="text-center px-4 py-2 text-12 bg-gradient-to-r from-Platinum via-lightPlatinum to-Platinum text-darkGray border-0 font-poppinsbold border-Gold my-2 shadow-xl rounded-t-xl">
                  {parse(t("Platinum_Start_at_just_content"))}
                </span>
                <div className="flex flex-col" style={{ padding: "0 10px" }}>
                  <span className="text-17 mt-10 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Lifetime_Validity")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Unlimited_Earning")}
                  </span>

                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Unlimited_Captchas")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("oneUnlimited_Captchas_")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("1500_Captchas_INR_75")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Surveys")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Courses + (All Features )")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Govt Exam Info")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Govt Job Info")}
                  </span>
                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Edu Academy Access")}
                  </span>

                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md w-3 h-3 mt-2 mr-3 float-left border-1  rounded-full`}
                    />
                    <p style={{ paddingLeft: "25px" }}> {t("Assuard Gift")}</p>
                  </span>

                  <span className="text-17 mt-3 font-sans">
                    <div
                      className={`${
                        (isGoldPlanActivated
                          ? colourCount + 2
                          : colourCount + 1) %
                          2 ===
                        0
                          ? "bg-deepBlue border-deepBlue"
                          : "bg-white border-white"
                      } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                    />
                    {t("Customer_Support")}
                  </span>
                </div>
              </div>
              <p
                className={`${
                  (isGoldPlanActivated ? colourCount + 2 : colourCount + 1) %
                    2 ===
                  0
                    ? "text-lightPink"
                    : "text-deepBlue"
                } text-sm font-semibold mx-3 text-center`}
                style={{
                  marginTop: "20px",
                  marginBottom: "30px",
                }}
              >
                {t("full_refund")}
              </p>

              <div className="mb-8 flex flex-col items-center space-y-4">
                <Link
                  to={{
                    pathname: websiteContent?.appLink,
                  }}
                  target="_blank"
                >
                  <button className=" bg-bgBlue font-cunia py-2 px-4 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue">
                    {t("Get_Android_App")}
                  </button>
                </Link>
                {websiteContent?.showIosAppButton && (
                  <Link
                    to={{
                      pathname: websiteContent?.iosAppButtonLink,
                    }}
                    target="_blank"
                  >
                    <button className=" bg-bgBlue font-cunia py-2 px-4 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue">
                      {t("Get_Ios_App")}
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </Card>
        )}

        {normalPlans
          ?.filter((plan) => plan?.name !== "Gold" || plan?.name !== "Platinum")
          ?.map((plan, index) => {
            colourCount++;
            let src = null;
            if (plan?.price === 1999) src = Regular;
            if (plan?.price === 3999) src = TopSelling;
            if (plan?.price === 6999) src = BestValue2;
            return (
              <Card
                key={index}
                className={
                  colourCount % 2 === 0
                    ? "bg-white border-2 border-gray-300 "
                    : "bg-lightPink"
                }
              >
                {src && (
                  <img
                    loading="lazy"
                    src={src}
                    alt="Earn Easy Money App OR Earn Easy App"
                    className="absolute -top-6 h-16 text-white  font-cunia -ml-0 -mb-10"
                  />
                )}
                <div className="flex flex-col items-center justify-between h-full">
                  <div
                    className={`flex flex-col items-center ${
                      colourCount % 2 === 0 ? "text-deepBlue" : "text-white"
                    } py-10`}
                    style={{
                      marginBottom: "10px",
                    }}
                  >
                    <span className="text-40 font-cunia">
                      {i18n.language === "hi" ? plan?.nameHindi : plan?.nameEng}
                    </span>
                    <span className="text-25 font-cunia mt-3 tracking-widest">
                      {i18n.language === "hi"
                        ? plan?.priceHindi
                        : plan?.priceEng}
                    </span>
                    {/* <span className="text-17 font-cunia mt-3">
                      {t("SECURITY_DEPOSIT")}
                    </span> */}
                    <span
                      className={`mt-3 text-12 font-regular ${
                        colourCount % 2 === 0 ? "text-lightPink" : "text-white"
                      }`}
                    >
                      {t("Refundable")}
                    </span>
                    {/* <span className="mt-3 text-10 tracking-widest">
                      {t("T_C_Applied")}
                    </span> */}
                    <span className="mt-3 text-10 tracking-widest text-lightPink">
                      {t("gst")}
                    </span>

                    <div
                      className="flex flex-col"
                      style={{ padding: "0 10px" }}
                    >
                      <span className="text-17 mt-10 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("Lifetime_Validity")}
                      </span>
                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("Unlimited_Earning")}
                      </span>

                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("Unlimited_Captchas")}
                      </span>
                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("oneUnlimited_Captchas_")}
                      </span>

                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {i18n.language === "hi"
                          ? plan?.rateHindi
                          : plan?.rateEng}
                      </span>
                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("Surveys")}
                      </span>
                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("Courses + (All Features )")}
                      </span>
                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("Govt Exam Info")}
                      </span>
                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("Govt Job Info")}
                      </span>
                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("Edu Academy Access")}
                      </span>

                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            (isGoldPlanActivated
                              ? colourCount + 2
                              : colourCount + 1) %
                              2 ===
                            0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md w-3 h-3 mt-2 mr-3  float-left border-1 rounded-full`}
                        />
                        <p style={{ paddingLeft: "25px" }}>
                          {t("Assuard Gift")}
                        </p>
                      </span>
                      

                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("Customer_Support")}
                      </span>
                      <span className="text-17 mt-3 font-sans">
                        <div
                          className={`${
                            colourCount % 2 === 0
                              ? "bg-deepBlue border-deepBlue"
                              : "bg-white border-white"
                          } shadow-md h-3 w-3 border-1 float-left mt-2 mr-3 rounded-full`}
                        />
                        {t("start_direct_payment")}
                      </span>
                    </div>
                  </div>

                  <p
                    className={`${
                      colourCount % 2 === 0 ? "text-lightPink" : "text-deepBlue"
                    } text-sm font-semibold mx-3 text-center`}
                    style={{
                      position: "absolute",
                      bottom: "135px",
                      marginTop: currentLanguage === "en" ? "27px" : "10px",
                      marginBottom: "30px",
                    }}
                  >
                    {t("full_refund")}
                  </p>

                  <div className="my-8 flex flex-col items-center space-y-4">
                    <Link
                      to={{
                        pathname: websiteContent?.appLink,
                      }}
                      target="_blank"
                    >
                      <button className=" bg-bgBlue font-cunia py-2 px-4 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue">
                        {t("Get_Android_App")}
                      </button>
                    </Link>
                    {websiteContent?.showIosAppButton && (
                      <Link
                        to={{
                          pathname: websiteContent?.iosAppButtonLink,
                        }}
                        target="_blank"
                      >
                        <button className=" bg-bgBlue font-cunia py-2 px-4 border-2 text-white border-white rounded-full hover:bg-DFEFFF hover:text-deepBlue hover:border-bgBlue">
                          {t("Get_Ios_App")}
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
      </div>

      {goldPlanDialogOpen && (
        <Dialog open={goldPlanDialogOpen} onClose={handleGoldPlanDialogClick}>
          <div className="p-4">
            gold plan clicked
            {currentLanguage === "en" ? (
              <div>Langiage is English</div>
            ) : (
              <div>Langiage is Hindi</div>
            )}
          </div>
        </Dialog>
      )}
    </div>
  );
};
export default Plans;
