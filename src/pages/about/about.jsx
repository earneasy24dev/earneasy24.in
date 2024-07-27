import React, { useRef, useEffect } from "react";

import Header from "../../components/organisms/header/header.component";
import Footer from "../../components/organisms/footer/footer.component";
import { useStore } from "../../store";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const headersData = [
  {
    label: "Home",
    href: "/",
    id: "home",
  },
  {
    label: "About",
    href: "/",
    id: "about",
  },

  // {
  //   label: "Blog",
  //   href: "/",
  // },

  // {
  //   label: "Contact",
  //   href: "/",
  // },
];

const About = () => {
  const websiteContent = useStore((state) => state.websiteContent);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const blogRef = useRef(null);

  const [t, i18n] = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (websiteContent?.defaultLanguage) {
      i18n.changeLanguage(websiteContent.defaultLanguage);
    }
  }, [websiteContent]);

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
        websiteContent={websiteContent}
      />

      {/* About*/}

      <div className="pb-16 lg:px-52 px-10" ref={aboutRef}>
        <div className="mt-36 text-center mb-8">
          <span className="text-40 lg:text-54 font-cunia text-deepBlue text-center">
            About Us
          </span>
        </div>

        <div className="text-black text-justify text-17">
          <span>
            The internet is more than a source of news and entertainment gossip.
            There are many companies that need to register/subscriber/signup in
            large quantities on hundreds or thousands of websites all over the
            internet. They can produce the automatic software to sign up on the
            websites but there is no technology to solve these captchas
            repeatedly robotically and that is where they have a prerequisite
            for humans to solve these Captchas. When their software creates
            accounts on these sites, they come to crossways Captcha & send that
            Captcha image to the Captcha solver. You have some seconds time to
            enter the exact characters provided in the image & you must have
            good accuracy to solve these images and that is where you can make
            money from Earneasy24 captcha solving online jobs from home & that
            too without any speculate investment. Once you are registered, you
            can start earning by completing captchas and the best part is, you
            can play this whenever you want and anywhere you want. Cell phone,
            Laptop, PC, or Tablet.&nbsp;
          </span>
          <span className="font-semibold text-lightPink">
            Sounds appealing? Signup now at Earneasy24.
          </span>
        </div>
        <div className="py-8">
          <span className="font-cunia text-deepBlue text-28 lg:text-34">
            - Make Money Online
          </span>
        </div>
        <div className="text-black text-justify text-17">
          <div>
            For many people, making money online would be an absolute dream come
            true. Now, here’s the good news- We pay genuinely on time, where you
            are more comfortable working & where you can make more money in less
            time. People from all over the world can join us. Initially, you
            need to work a little hard to earn money but with time, you will
            find a very profitable position on this Application as you acquire
            more accuracy while solving captchas. Yes, it’s not big bucks and
            the work is a bit monotonous, but you can be sure that you will
            receive each cent you’ve earned, and you will not be scammed. You
            can do captcha work from anywhere just a basic android/iPhone
            phone/PC is required.
          </div>
          <div className="font-semibold text-lightPink py-4">
            We pay users using Bank transfer / IMPS for completing the given
            task.
          </div>
        </div>
      </div>

      {/* Footer*/}
      <Footer />
    </div>
  );
};

export default About;
