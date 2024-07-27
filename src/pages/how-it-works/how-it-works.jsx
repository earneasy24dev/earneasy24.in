import { useEffect, useRef } from "react";

import { useTranslation } from "react-i18next";

import Header from "../../components/organisms/header/header.component";
import Footer from "../../components/organisms/footer/footer.component";
import ReactPlayer from "react-player";
import { useStore } from "../../store";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

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

const HowItWorks = () => {
  const { search } = useLocation();
  const { locale } = queryString.parse(search);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);
  const [t, i18n, ready] = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    if (locale) changeLanguage(locale);
  }, [locale]);

  const websiteContent = useStore((state) => state.websiteContent);

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

      <div className="flex flex-col lg:h-screen lg:flex-col lg:py-24 py-16 px-10 items-center gap-10 justify-center bg-DFEFFF">
        <div className="flex justify-center ">
          <span className="text-40 lg:text-54 mt-12 font-cunia text-center text-deepBlue px-10">
            How it works<span className="text-lightPink">?</span>
          </span>
        </div>

        <div className="shadow-2xl border-6 border-white w-full h-2/3 lg:w-580 lg:h-320 rounded-xl">
          <ReactPlayer
            className="rounded-xl"
            width="100%"
            height="100%"
            url={
              i18n.language === "en"
                ? websiteContent?.howItWorksVideoEng
                : i18n.language === "hi"
                ? websiteContent?.howItWorksVideoHindi
                : websiteContent?.howItWorksVideoEng
            }
            controls={true}
            playing={true}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
