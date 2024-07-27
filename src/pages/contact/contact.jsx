import React, { useRef, useEffect, useState } from "react";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import axios from "../../axios";
import { successToast, errorToast } from "../../utils/toast";
import { useTranslation } from "react-i18next";
import { useStore } from "../../store";

const Contact = () => {
  const websiteContent = useStore((state) => state.websiteContent);
  const [t, i18n] = useTranslation();
  const contactRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sendEnquiry = (e) => {
    e.preventDefault();
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errorToast("Please enter a valid email");
      return;
    }
    axios
      .post("createEnquiry", {
        name,
        whatsapp,
        email,
        message,
        language: i18n.language || "en",
      })
      .then((response) => {
        setName("");
        setWhatsapp("");
        setEmail("");
        setMessage("");
        if (response.data.enquirySent) {
          successToast(
            "Enquiry sent successfully. Our team will contact you shortly.",
            4000
          );
        }
      })
      .catch((err) =>
        errorToast("Something went wrong. Please try again.", 3000)
      );
  };

  return (
    <div className="">
      {/* <Header headersData={headersData} /> */}

      {/* Contact*/}

      <div className="lg:px-40" ref={contactRef}>
        <form
          onSubmit={sendEnquiry}
          className="grid grid-cols-1 xl:grid-cols-2 xl:gap-20 space-y-10 lg:space-y-0"
        >
          <div className="px-10">
            <span className="text-40 lg:text-54 text-deepBlue font-cunia">
              {t("contact_us")}
            </span>
            {websiteContent?.showSocialsOnContact && (
              <div className="flex flex-col lg:gap-10 gap-5 font-medium mt-10">
                <div className="font-cunia text-24 text-deepBlue">
                  {t("contact_form.email")} -{" "}
                </div>
                <div className="text-lightPink">{websiteContent?.email}</div>
                <div className="flex flex-row gap-5">
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
              </div>
            )}
          </div>
          <div className="lg:p-10 p-5 mx-5 rounded-lg border-t-4 border-deepBlue bg-white shadow-2xl">
            <div className="text-deepBlue font-light">
              {t("contact_form.name")}
            </div>
            <input
              type="text"
              placeholder={t("contact_form.name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-black px-4 py-2 border border-deepBlue rounded-lg"
              required
            />
            <div className="text-deepBlue font-light mt-4">
              {t("contact_form.email")}
            </div>
            <input
              type="email"
              placeholder={t("contact_form.email")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-black px-4 py-2 border border-deepBlue rounded-lg"
              required
            />
            <div className="text-deepBlue font-light mt-4">
              {t("contact_form.whatsapp")}
            </div>
            <input
              type="tel"
              placeholder="+91"
              value={whatsapp}
              onChange={(e) => {
                const re = /^[0-9\b]+$/;
                if (e.target.value === "" || re.test(e.target.value)) {
                  setWhatsapp(e.target.value);
                }
              }}
              className="w-full text-black px-4 py-2 border border-deepBlue rounded-lg"
              minLength={10}
              maxLength={10}
              required
            />
            <div className="text-deepBlue font-light mt-4">
              {t("contact_form.message")}
            </div>
            <textarea
              id="message"
              name={t("contact_form.message")}
              rows="4"
              placeholder={t("contact_form.message")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-black px-4 py-2 border border-deepBlue rounded-lg"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full text-center py-2 hover:bg-white hover:border-deepBlue hover:text-deepBlue border-lightPink border-2 font-cunia text-18 bg-lightPink text-white mt-4 rounded-full"
            >
              {t("contact_form.submit")}
            </button>
          </div>
        </form>
      </div>

      {/* Footer*/}
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
