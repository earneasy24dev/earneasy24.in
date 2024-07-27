import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import WhatsappIcon from "@material-ui/icons/WhatsApp";
import whatsapplogo from "../../../assets/social/whatsapp.png";
import { useStore } from "../../../store";
import { useEffect, useState } from "react";
import axios from "../../../axios";

const Footer = () => {
  const websiteContent = useStore((state) => state.websiteContent);
  const setWebsiteContent = useStore((state) => state.setWebsiteContent);
  const [whatsappNumber, setWhatsappNumber] = useState("");

  useEffect(() => {
    axios.get("getWebsiteContent").then((response) => {
      if (response?.data?.content) {
        setWebsiteContent(response?.data?.content);
      }
    });
    axios.get("getEearneasyWhatsapp").then((response) => {
      if (response?.data) {
        setWhatsappNumber(response?.data?.number);
      }
    });
  }, []);

  return (
    <div className="bg-bgBlue text-white">
      <div className="justify-content-center font-sans items-center gap-10 grid lg:grid-cols-3 px-10 lg:px-28 py-16">
        <div>
          <div className="text-22 font-cunia">Contact</div>
          <br />

          <div className="mt-2 text-15">
            <span className="font-semibold mt-2">Email: </span>
            <span>{websiteContent?.email}</span>
          </div>
          <br />
          {websiteContent?.showSocials && (
            <>
              <div className="text-22 font-cunia">Get In Touch</div>
              <br />
              <div className="flex flex-row gap-5">
                <a
                  href={websiteContent?.facebook}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <FacebookIcon className="transform scale-150 hover:text-lightPink" />
                </a>
                <a
                  href={websiteContent?.twitter}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <TwitterIcon className="transform scale-150 hover:text-lightPink" />
                </a>
                <a
                  href={websiteContent?.youtube}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <YouTubeIcon className="transform scale-150 hover:text-lightPink" />
                </a>
                <a
                  href={websiteContent?.instagram}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <InstagramIcon className="transform scale-150 hover:text-lightPink" />
                </a>
                <a
                  href={websiteContent?.telegram}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <TelegramIcon className="transform scale-150 hover:text-lightPink" />
                </a>
                <a
                  href={websiteContent?.whatsappChannel}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <WhatsappIcon className="transform scale-150 hover:text-lightPink" />
                </a>
              </div>
            </>
          )}
        </div>
        <div>
          <div className="text-22 font-cunia">Quick Links</div>
          {/* <br /> */}

          {/* <div className="hover:text-primary">
            <a
              href="/about"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              About Us
            </a>
          </div> */}

          {/* <div className="hover:text-primary">
            <a
              href="/#plans"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              Pricing
            </a>
          </div> */}

          <div className="hover:text-primary">
            <a
              href="/terms-conditions"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              Terms & Conditions
            </a>
          </div>
          <div className="hover:text-primary">
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              Privacy Policy
            </a>
          </div>
          <div className="hover:text-primary">
            <a
              href="/refund-policy"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              Refund & Cancelation Policy
            </a>
          </div>
        </div>
      </div>

      {websiteContent?.showWhatsappChat && whatsappNumber !== "" && (
        <div className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50">
          <a
            href={`https://api.whatsapp.com/send?phone=91${whatsappNumber}&text=Hello, Earneasy24, I am visiting your website and I want to know more about it. Thank you `}
            target="_blank"
            rel="noreferrer"
          >
            <img
              loading="lazy"
              className="w-12 h-12"
              alt="Earn Easy Money App OR Earn Easy App"
              src={whatsapplogo}
            />
          </a>
        </div>
      )}
      <p className="text-center text-sm pb-4">
        Powered by TechAircraft Solution Private Limited
      </p>
    </div>
  );
};

export default Footer;
