import { React, useEffect } from "react";
import Header from "../../components/organisms/header/header.component";
import Footer from "../../components/organisms/footer/footer.component";
import { useStore } from "../../store";
import { Helmet } from "react-helmet";

const RefundPolicy = () => {
  const websiteContent = useStore((state) => state.websiteContent);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <Header headersData={[]} />

      <div className="pb-20 mt-36 lg:px-52 px-10">
        <div className="flex flex-col items-center py-4 text-deepBlue  ">
          <span className="text-40 lg:text-54 font-cunia">Refund Policy</span>
        </div>
        <div className="text-17 py-4">
          <br />

          <p class="p2">
            <span class="s1">
              This is the Refund Policy for{" "}
              <span className="text-lightPink">Earneasy24</span>. Please read it
              carefully before making a purchase.
            </span>
          </p>

          <br />

          <p>
            <span className="text-sm lg:text-30 font-cunia">Refund Policy</span>
          </p>

          <br />

          <p>
            <span class="s1">
              If your purchase is eligible for a refund, please follow these
              steps:
            </span>
          </p>

          <br />

          <ul
            class="p2"
            style={{
              listStyle: "disc",
            }}
          >
            <div className="mt-1 pt-1">
              <li className="s1 ">
                Contact our customer support team within 7 days of receiving the
                service.
              </li>
            </div>
            <div className="mt-1 pt-1">
              <li class="s1">
                Provide detailed information about the issue, including photos
                if applicable.
              </li>
            </div>

            <div className="mt-1 pt-1">
              <li lass="s1">
                Our team will review your request and respond within 48 hours.
              </li>
            </div>

            <div className="mt-1 pt-1">
              <li lass="s1">
                If your request is approved, we will initiate the refund
                process.
              </li>
            </div>

            <div className="mt-1 pt-1">
              <li lass="s1 mt-1 pt-1">
                Refunds will be issued via the original payment method used for
                the purchase within 7 working days. .
              </li>
            </div>
          </ul>

          <br />

          <p class="p2">
            <span class="s1">
              Contact Us: If you have any questions or concerns about our Refund
              Policy, please contact us at{" "}
              <span className="text-lightPink">help@techaircraft.com</span>
            </span>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
