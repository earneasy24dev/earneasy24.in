import React, { useRef, useEffect, useState } from "react";
import CustomPlansButton from "../../components/atoms/button/plans.button";
import Card from "../../components/atoms/card/card";
import CustomAccordion from "../../components/atoms/accordion/CustomAccordion";

import { useTranslation } from "react-i18next";

import Person from "../../images/person.svg";
import Arrow from "../../images/selectPlan.svg";
import Subscribe from "../../images/payment.svg";
import Rupee from "../../images/paid.svg";
import PuzzleImg from "../../images/registered_company.svg";
import Iso from "../../images/iso.svg";
import Like from "../../images/trusted.svg";
import { Link } from "react-router-dom";
import Header from "../../components/organisms/header/header.component";
import Footer from "../../components/organisms/footer/footer.component";
import ReactPlayer from "react-player/youtube";
import axios from "../../axios";
import { useStore } from "../../store";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import Contact from "../contact/contact";
import styles from "./main.module.css";
import ContactModal from "../contact/contact-modal";
import classNames from "../../utils/classNames";
import ContactModalPageLoad from "../contact/ContactModalPageLoad";
import Plans from "../../components/organisms/plans";
import { Helmet } from "react-helmet";

const dataFaq = [
  {
    title: "What is Captcha? ",
    content:
      "CAPTCHA – Completely Automated Public Turning Test to Tell Computers and Humans Apart. The captcha is a program that is designed to eliminate bots or automated programs from accessing the application or website. Captcha Entry job out there where one just must solve Captcha to make money.  In simple words, the captcha is a shield protection application/tool that requires Human intelligence to crack. Only a human can solve the captcha and enter the application while the bots will be blocked from accessing the protected origin sources. protection application/tool that requires Human intelligence to crack. Only a human can solve the captcha and enter the application while the bots will be blocked from accessing the protected origin sources.",
    titleKey: "what_is_captcha",
    contentKey: "what_is_captcha_content",
  },
  {
    title: "What are the basic requirements for captcha typing job? ",
    content:
      "This online Captcha solving remote job does have some necessities.\n The very first requisites are a basic phone/laptop or tablet with a stable internet connection and very basic English knowledge. You must be able to differentiate between the Capital letters and small letters. Also, sometimes you should be able to type special fonts/characters, solve basic addition, multiplication, and subtraction problems.",
    titleKey: "basic_requirements",
    contentKey: "basic_requirements_content",
  },
  {
    title: "How to get started with Earneasy24?",
    content:
      "It’s easy to get started! Below are the basic steps:-\n \n1) Download the mobile app \n2) Register with us, choose a plan as per your preferences and pay\n3) Go to dashboard and start solving captchas\n4) Get payment of the work done directly to your bank account",
    titleKey: "get_started",
    contentKey: "get_started_content",
  },
  // {
  //   title: "Is security deposit refundable?",
  //   content:
  //     "Earneasy24 does not ask for any kind of subscription money, service fee, etc. We collect security deposit at the time of account creation which is refundable under certain terms provided below:-\n   1. Silver Plan Account Holder shall earn a minimum amount of RS 35000 to get the refund of the security deposit.\n   2. Gold plan Account Holder shall earn a minimum amount of RS 35000 to get the refund of the security deposit.\n   3. Platinum Plan Account Holder shall earn a minimum amount of RS 35000 to get the refund of the security deposit.\n   4. Note: Entry Fee is not refundable in any other circumstances.",
  //   titleKey: "security_deposit",
  //   contentKey: "security_deposit_content",
  // },
  {
    title: "How much we can earn from Earneasy24?",
    content:
      " There  is no limitation of earning. Many of Earneasy24’s users are earning 15k to 20k per month by working just 6-7 hours per day.",
    titleKey: "how_much_earn",
    contentKey: "how_much_earn_content",
  },
  {
    title: "When can I do captcha entry?",
    content:
      "It’s a very flexible job that gives you control and freedom over a gig which is ideal students, part-time job seekers, housewife, anyone who is looking to make extra income-it can be also opted in as full-time job- there are no hard and fast rules around, you can log in – signoff anytime you wish to and more importantly anywhere in the world!, This is a 24/7 job so time is never a stumbling block. Work will be available most of the time in a continual amount, so you don’t need to worry about that.",
    titleKey: "when_captcha_entry",
    contentKey: "when_captcha_entry_content",
  },
  {
    title: "What are the Payment withdrawal options?",
    content: "Four payment options are provided by Earneasy24.\n\n   IMPS/NEFT",
    titleKey: "payment_options",
    contentKey: "payment_options_content",
  },
  {
    title: "Is there any targets or conditions?",
    content:
      "There are no targets, no accuracy, no deduction or anything, just fill captchas anytime and get daily cash payment.",
    titleKey: "targets",
    contentKey: "targets_content",
  },
];

const headersData = [
  {
    label: "About",
    href: "/",
    id: "about",
  },
  {
    label: "How It Works",
    href: "#h",
    id: "how_it_works",
  },
  {
    label: "Why Us",
    href: "/",
    id: "why_us",
  },
  {
    label: "Plans",
    href: "/",
    id: "plans",
  },
  {
    label: "FAQs",
    href: "/",
    id: "faqs",
  },
  {
    label: "Contact",
    href: "/",
    id: "contact",
  },
  {
    label: "Blog",
    href: "/",
    id: "blog",
  },
];

const Main = () => {
  const [contactModal, setContactModal] = useState(false);
  const [contactModalPageLoad, setContactModalPageLoad] = useState(true);

  const plansRef = useRef(null);
  const whyUsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const faqRef = useRef(null);
  const footerRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [t, i18n] = useTranslation();

  const websiteContent = useStore((state) => state.websiteContent);
  const setWebsiteContent = useStore((state) => state.setWebsiteContent);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    axios.get("getWebsiteContent").then((response) => {
      if (response?.data?.content) {
        setWebsiteContent(response?.data?.content);
        if (response.data?.content?.showContactUsOnPageLoad)
          setContactModalPageLoad(true);
      }
    });
  }, []);

  useEffect(() => {
    if (websiteContent?.showContactUsOnPageLoad == 1)
      setContactModalPageLoad(true);
  }, [i18n.language]);

  useEffect(() => {
    let timeoutId = null;
    if (window.location.hash === "#plans" && plansRef !== null) {
      timeoutId = setTimeout(() => {
        plansRef.current.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [window.location]);

  return (
    <div className="font-sans">
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Easy Captcha Job | EarnEasy24 Money App | Earn With Captcha App
        </title>
        <meta
          name="description"
          content="Unlock effortless earnings with the Easy Captcha Job app! Start earning money effortlessly today. Join now and earn with Captcha."
        />
        <meta
          name="keywords"
          content="earn with captcha app, easy captcha job app, earn easy money app"
        />
      </Helmet>
      <Header
        plansRef={plansRef}
        howItWorksRef={howItWorksRef}
        whyUsRef={whyUsRef}
        faqRef={faqRef}
        aboutRef={aboutRef}
        headersData={headersData}
        contactRef={contactRef}
        languageButton={true}
        changeLanguage={changeLanguage}
        websiteContent={websiteContent}
      />

      <div className="bg-white lg:h-screen">
        <div className="flex flex-col lg:gap-10 gap-0 items-center lg:flex-row pt-14">
          <img
            loading="lazy"
            src={Person}
            alt="Earn Easy Money App OR Earn Easy App"
            className="lg:w-2/5 w-3/5 lg:h-full mt-20 ml-0 md:ml-10"
          />
          <div className="flex flex-col items-center lg:justify-content-center">
            <div className="lg:mt-12 mt-6 px-10 text-center font-black lg:leading-normal">
              <span className=" lg:ml-10  text-22 lg:text-54 text-deepBlue font-cunia">
                {t("tag_line")}
                <span className="text-lightPink">{t("dot")}</span>
              </span>
              {websiteContent?.showWhatsapp && (
                <div className="font-cunia mt-6 text-deepBlue">
                  <div className="text-18 lg:text-38 leading-none">
                    {t("WhatsApp_us_on")}
                  </div>

                  <div className="text-20 lg:text-40 mt-3 text-lightPink leading-none">
                    <a href={`tel:${websiteContent?.whatsapp}`}>
                      +91 {websiteContent?.whatsapp}
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:space-x-6">
              <Link
                to={{
                  pathname: websiteContent?.appLink,
                }}
                target="_blank"
              >
                <CustomPlansButton
                  text={t("Download_The_App")}
                  disabled={false}
                  size="normal"
                  outlined={true}
                  className="mt-6 lg:mt-6 font-semibold h-12 lg:h-16 text-18 w-56 font-cunia bg-lightPink text-white border-2 "
                />
              </Link>
              {websiteContent?.showIosAppButton && (
                <Link
                  to={{
                    pathname: websiteContent?.iosAppButtonLink,
                  }}
                  target="_blank"
                >
                  <CustomPlansButton
                    text={t("Download_The_App_Ios")}
                    disabled={false}
                    size="normal"
                    outlined={true}
                    className="mt-6 lg:mt-6 font-semibold h-12 lg:h-16 text-18 w-56 font-cunia bg-lightPink text-white border-2 "
                  />
                </Link>
              )}
            </div>
            {websiteContent?.showSocialsOnHomePage && (
              <div className="flex flex-row gap-5 mt-10 mb-16 lg:mb-0">
                <a
                  href={websiteContent?.facebook}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <FacebookIcon className="transform scale-100 hover:text-lightPink text-deepBlue" />
                </a>
                <a
                  href={websiteContent?.twitter}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <TwitterIcon className="transform scale-100 hover:text-lightPink text-deepBlue" />
                </a>
                <a
                  href={websiteContent?.instagram}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <InstagramIcon className="transform scale-100 hover:text-lightPink text-deepBlue" />
                </a>
                <a
                  href={websiteContent?.telegram}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <TelegramIcon className="transform scale-100 hover:text-lightPink" />
                </a>
                <a
                  href={websiteContent?.whatsappChannel}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <WhatsappIcon className="transform scale-100 hover:text-lightPink" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:py-32 py-16 px-10 items-center gap-10 lg:gap-20 justify-content-center bg-bgBlue">
        <div className="lg:w-2/5 text-54 text-center lg:text-68 leading-normal text-white font-cunia font-semibold lg:ml-32">
          {t("at_a_Glance")}
          <span className="text-lightPink">...</span>
        </div>
        <div className="shadow-2xl border-6 border-white w-full h-2/3 lg:w-580 lg:h-320 rounded-xl">
          <ReactPlayer
            className="rounded-xl"
            width="100%"
            height="100%"
            url={
              i18n.language === "en"
                ? websiteContent?.videoEng
                : i18n.language === "hi"
                ? websiteContent?.videoHindi
                : websiteContent?.videoEng
            }
            controls={true}
            playing={false}
          />
        </div>
      </div>

      <div
        className="lg:px-16 lg:py-28 bg-DFEFFF py-16 "
        id="h"
        ref={howItWorksRef}
      >
        <div className="flex justify-center text-center p-2 mb-16">
          <span className="text-40 lg:text-54 text-deepBlue font-cunia">
            {t("How_it_works")}
            <span className="text-lightPink">?</span>
          </span>
        </div>
        <div className="grid grid-cols-1 px-10 xl:grid-cols-3 xl:gap-20 space-y-10 lg:space-y-0">
          <Card className="bg-white cursor-pointer">
            <div
              className="flex flex-col items-center text-4c4c4c py-12"
              onClick={() =>
                plansRef.current.scrollIntoView({ behavior: "smooth" })
              }
            >
              <img
                loading="lazy"
                src={Arrow}
                alt="Earn Easy Money App OR Earn Easy App"
                className="rounded-full  h-40 w-40"
              />

              <span className="text-28 text-deepBlue font-cunia mt-3 px-4 text-center">
                {t("Select_a_plan")}
              </span>

              <span className="text-15 text-lightPink text-center mt-4 mx-8">
                {t("Select_a_plan_content")}
              </span>
            </div>
          </Card>

          <Card className="bg-white">
            <div className="flex flex-col items-center text-4c4c4c py-12">
              <img
                loading="lazy"
                src={Subscribe}
                alt="Earn Easy Money App OR Earn Easy App"
                className="rounded-full  h-40 w-40"
              />

              <span className="text-28 text-deepBlue text-center font-cunia mt-3 px-4">
                {t("Pay_Security_Deposit")}
              </span>

              <span className="text-15 text-lightPink text-center mt-4 mx-8">
                {t("Pay_Security_Deposit_content")}
              </span>
            </div>
          </Card>
          <Card className="bg-white ">
            <div className="flex flex-col items-center justify-items-center text-4c4c4c py-12 ">
              <img
                loading="lazy"
                src={Rupee}
                alt="Earn Easy Money App OR Earn Easy App"
                className="rounded-full  h-40 w-40"
              />

              <span className="text-28 text-deepBlue font-cunia mt-3 px-4 text-center">
                {t("Solve_Get_Paid")}
              </span>

              <div className="text-15 text-center text-lightPink mt-4 mx-8 ">
                {t("Solve_Get_Paid_content")}
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div
        className="lg:px-16 px-10 py-16 lg:py-20 bg-lightpink"
        ref={whyUsRef}
      >
        <div className="flex justify-center text-center mb-16">
          <span className="text-40 lg:text-54 text-deepBlue font-cunia">
            {t("Why_Choose_Us")}
            <span className="text-lightPink">?</span>
          </span>
        </div>
        <div className="grid lg:grid-cols-4  gap-12">
          <Card className="border-2 border-bgBlue ">
            <div className="flex flex-col items-center text-4c4c4c py-12">
              <img
                loading="lazy"
                src={PuzzleImg}
                alt="Earn Easy Money App OR Earn Easy App"
                className="rounded-full  h-48 w-48"
              />

              <span className="text-28 text-center mx-4 text-deepBlue font-cunia mt-3">
                {t("Registered_Company")}
              </span>

              <span className="text-15 text-center text-lightPink mt-4 mx-8">
                {t("Registered_Company_content")}
              </span>
            </div>
          </Card>
          <Card className="border-2 border-bgBlue ">
            <div className="flex flex-col items-center text-4c4c4c py-12">
              <img
                loading="lazy"
                src={Iso}
                alt="Earn Easy Money App OR Earn Easy App"
                className="rounded-full  h-48 w-48"
              />

              <span className="text-28 text-center mx-4 text-deepBlue font-cunia mt-3">
                {t("ISO_9001_Certified_Company")}
              </span>

              <span className="text-15 text-center text-lightPink mt-4 mx-8">
                {t("ISO_9001_Certified_Company_content")}
              </span>
            </div>
          </Card>
          <Card className="border-2 border-bgBlue  ">
            <div className="flex flex-col items-center text-4c4c4c py-12">
              <img
                loading="lazy"
                src={Like}
                alt="Earn Easy Money App OR Earn Easy App"
                className="rounded-full  h-48 w-48"
              />

              <span className="text-28 text-deepBlue text-center mx-4 font-cunia mt-3">
                {t("Trusted_by_people_like_you")}
              </span>

              <span className="text-15 text-center text-lightPink mt-4 mx-8">
                {t("Trusted_by_people_like_you_content")}
              </span>
            </div>
          </Card>
          <Card className="border-2 border-bgBlue ">
            <div className="flex flex-col items-center text-4c4c4c py-12">
              <img
                loading="lazy"
                src={Subscribe}
                alt="Earn Easy Money App OR Earn Easy App"
                className="rounded-full  h-40 w-40"
              />

              <span className="text-28 text-deepBlue text-center mx-4 font-cunia mt-11">
                {t("Secure_Timely_Payments")}
              </span>

              <span className="text-15 text-center text-lightPink mt-4 mx-8">
                {t("Secure_Timely_Payments_content")}
              </span>
            </div>
          </Card>
        </div>
      </div>

      <Plans plansRef={plansRef} />

      <div className="py-20 bg-DFEFFF" ref={faqRef}>
        <div className="flex justify-center mb-16">
          <span className="text-40 lg:text-54 font-cunia text-center text-deepBlue px-10">
            {t("Frequently_Asked_Questions")}
          </span>
        </div>

        <div className="flex flex-col mx-10 lg:mx-40 shadow-2xl">
          <CustomAccordion data={dataFaq} />
        </div>
      </div>

      <div className="py-20">
        <div className="flex justify-center">
          <span className="text-40 lg:text-54 text-center text-deepBlue font-cunia">
            {t("Testimonials")}
          </span>
        </div>

        <div className="grid lg:grid-cols-2 mt-16 px-10 lg:px-52  gap-10 lg:gap-20">
          <div className="border-2 text-deepBlue bg-DFEFFF rounded-lg p-4 border-deepBlue shadow-md">
            <span className="italic text-17 leading-loose">
              {t("Testimonials1")}
            </span>
            <div className="flex flex-row mt-4">
              <div className="">
                <div className="text-blue text-14 font-semibold">
                  {t("MAYANK_SINGH")}
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 text-deepBlue bg-DFEFFF rounded-lg p-4 border-deepBlue shadow-md">
            <span className="italic text-17 leading-loose">
              {t("Testimonials2")}
            </span>
            <div className="flex flex-row mt-4">
              <div className="">
                <div className="text-blue text-14 font-semibold">
                  {t("KESHAV_DEV")}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:py-12 border-2 text-deepBlue bg-DFEFFF rounded-lg p-4 border-deepBlue shadow-md">
            <span className="italic text-17 leading-loose">
              {t("Testimonials3")}
            </span>
            <div className="flex flex-row mt-4">
              <div className="">
                <div className="text-blue text-14 font-semibold">
                  {t("SHEETAL_SHARMA")}
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 text-deepBlue bg-DFEFFF rounded-lg p-4 border-deepBlue shadow-md">
            <span className="italic text-17 leading-loose">
              {t("Testimonials4")}
            </span>
            <div className="flex flex-row  mt-4">
              <div className="">
                <div className="text-blue text-14 font-semibold">
                  {t("PRAVEEN_KUMAR")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-16 px-10 py-16 lg:py-20 bg-lightpink">
        <div className="flex justify-center text-center mb-16">
          <span className="text-40 lg:text-54 text-deepBlue font-cunia">
            {t("contact_form.documents")}
          </span>
        </div>
        <div className="grid lg:grid-cols-4  gap-12">
          <Card className="border-2 border-bgBlue ">
            <a
              className="flex flex-col items-center text-4c4c4c py-6 h-full"
              href={
                "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/mca.jpeg"
              }
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-28 text-center mx-4 text-deepBlue font-cunia">
                MCA Certificate
              </span>
              <img
                loading="lazy"
                src={
                  "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/mca.jpeg"
                }
                alt="Earn Easy Money App OR Earn Easy App"
                className="h-full w-full object-fit mt-3"
              />
            </a>
          </Card>

          <Card className="border-2 border-bgBlue ">
            <a
              className="flex flex-col items-center text-4c4c4c py-6 h-full"
              href={
                "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/gst.jpeg"
              }
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-28 text-center mx-4 text-deepBlue font-cunia">
                GST Certificate
              </span>
              <img
                loading="lazy"
                src={
                  "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/gst.jpeg"
                }
                alt="Earn Easy Money App OR Earn Easy App"
                className="h-full w-full object-fit mt-3"
              />
            </a>
          </Card>

          <Card className="border-2 border-bgBlue ">
            <a
              className="flex flex-col items-center text-4c4c4c py-6 h-full"
              href={
                "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/iso.jpeg"
              }
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-28 text-center mx-4 text-deepBlue font-cunia">
                ISO Certificate
              </span>
              <img
                loading="lazy"
                src={
                  "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/iso.jpeg"
                }
                alt="Earn Easy Money App OR Earn Easy App"
                className="h-full w-full object-fit mt-3"
              />
            </a>
          </Card>

          <Card className="border-2 border-bgBlue ">
            <a
              className="flex flex-col items-center text-4c4c4c py-6 h-full"
              href={
                "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/sdl.jpeg"
              }
              without
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-28 text-center mx-4 text-deepBlue font-cunia">
                DIN Certificate
              </span>
              <img
                loading="lazy"
                src={
                  "https://captchas-new.s3.ap-south-1.amazonaws.com/aircraft-documents/sdl.jpeg"
                }
                alt="Earn Easy Money App OR Earn Easy App"
                className="h-full w-full object-fit mt-3"
              />
            </a>
          </Card>
        </div>
      </div>

      <div className="py-28" ref={contactRef}>
        <Contact />
      </div>

      {/* <img loading="lazy" 
        className="fixed bottom-6 left-3 w-10 h-10 md:hidden"
        src={ArrowDown}
        alt=""
        onClick={() => footerRef.current.scrollIntoView({ behavior: "smooth" })}
      /> */}

      {/* Footer*/}
      <div ref={footerRef}>
        <Footer plansRef={plansRef} />
      </div>

      {websiteContent?.showContactUsOnSide && (
        <>
          <ContactModal opened={contactModal} setOpened={setContactModal} />
          <div
            className={classNames(
              styles["left"],
              "bg-green text-white px-2 rounded text-sm lg:text-base z-50 cursor-pointer"
            )}
            onClick={() => setContactModal(true)}
          >
            Contact Us
          </div>
        </>
      )}

      {websiteContent?.showContactUsOnPageLoad && (
        <ContactModalPageLoad
          opened={contactModalPageLoad}
          setOpened={setContactModalPageLoad}
        />
      )}
    </div>
  );
};

export default Main;
