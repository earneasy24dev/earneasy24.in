import { useRef, useState } from "react";

import { useTranslation } from "react-i18next";
import CustomAccordion from "../../components/atoms/accordion/CustomAccordion";

import Header from "../../components/organisms/header/header.component";
import Footer from "../../components/organisms/footer/footer.component";
import { Helmet } from "react-helmet";

const dataFaq = [
  {
    title: "What is Captcha? ",
    content:
      "CAPTCHA – Completely Automated Public Turning Test to Tell Computers and Humans Apart. The captcha is a program that is designed to eliminate bots or automated programs from accessing the application or website. Captcha Entry job out there where one just must solve Captcha to make money.  In simple words, the captcha is a shield protection application/tool that requires Human intelligence to crack. Only a human can solve the captcha and enter the application while the bots will be blocked from accessing the protected origin sources. protection application/tool that requires Human intelligence to crack. Only a human can solve the captcha and enter the application while the bots will be blocked from accessing the protected origin sources.",
  },
  {
    title: "What are the basic requirements for captcha typing job? ",
    content:
      "This online Captcha solving remote job does have some necessities.\n The very first requisites are a basic phone/laptop or tablet with a stable internet connection and very basic English knowledge. You must be able to differentiate between the Capital letters and small letters. Also, sometimes you should be able to type special fonts/characters, solve basic addition, multiplication, and subtraction problems.",
  },
  {
    title: "How to get started with Earneasy24?",
    content:
      "It’s easy to get started! Below are the basic steps:-\n \n1) Download the mobile app \n2) Register with us, choose a plan as per your preferences and pay entry fee\n3) Go to dashboard and start solving captchas\n4) Get payment of the work done directly to your bank account",
  },
  {
    title: "Is entry fee refundable?",
    content:
      "Earneasy24 does not ask for any kind of subscription money, service fee, etc. We collect entry fee at the time of account creation which is refundable under certain terms provided below:-\n   1. Silver Plan Account Holder shall earn a minimum amount of RS 35000 to get the refund of the entry fee.\n   2. Gold plan Account Holder shall earn a minimum amount of RS 35000 to get the refund of the entry fee.\n   3. Platinum Plan Account Holder shall earn a minimum amount of RS 35000 to get the refund of the entry fee.\n   4. Note: Entry Fee is not refundable in any other circumstances.",
  },
  {
    title: "How much we can earn from Earneasy24?",
    content:
      " There  is no limitation of earning. Many of Earneasy24’s users are earning 15k to 20k per month by working just 6-7 hours per day.",
  },
  {
    title: "When can I do captcha entry?",
    content:
      "It’s a very flexible job that gives you control and freedom over a gig which is ideal students, part-time job seekers, housewife, anyone who is looking to make extra income-it can be also opted in as full-time job- there are no hard and fast rules around, you can log in – signoff anytime you wish to and more importantly anywhere in the world!, This is a 24/7 job so time is never a stumbling block. Work will be available most of the time in a continual amount, so you don’t need to worry about that.",
  },
  {
    title: "What are the Payment withdrawal options?",
    content: "Four payment options are provided by Earneasy24.\n\n   IMPS/NEFT",
  },
  {
    title: "Is there any targets or conditions?",
    content:
      "There are no targets, no accuracy, no deduction or anything, just fill captchas anytime and get daily cash payment.",
  },
];

const headersData = [
  {
    label: "About",
    href: "/",
    id: "about",
  },

  {
    label: "Blog",
    href: "/",
    id: "blog",
  },

  {
    label: "Contact",
    href: "/",
    id: "contact",
  },
];

const Faqs = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);
  const [t, i18n, ready] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
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
        aboutRef={aboutRef}
        contactRef={contactRef}
        blogRef={blogRef}
        headersData={headersData}
      />

      <div className="py-20 lg:h-screen bg-DFEFFF">
        <div className="flex justify-center mb-16">
          <span className="text-40 lg:text-54 mt-12 font-cunia text-center text-deepBlue px-10">
            {t("Frequently_Asked_Questions")}
          </span>
        </div>

        <div className="flex flex-col mx-10 lg:mx-40 shadow-2xl">
          <CustomAccordion data={dataFaq} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faqs;
