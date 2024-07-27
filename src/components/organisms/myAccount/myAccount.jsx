import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { errorToast, successToast } from "../../../utils/toast";
import { useTranslation } from "react-i18next";
import axios from "../../../axios";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../../images/dash_background.png";
import { useUser } from "../../../hooks/use-user";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const MyAccount = () => {
  const classes = useStyles();

  const [t] = useTranslation();
  const { data: user } = useUser();

  const refund = () => {
    if (user?.totalEarning < 35000) {
      errorToast(t("refund_alert_message"));
      return;
    }

    if (user?.refundRequestSent) {
      successToast("Refund request already sent.");
      return;
    }

    axios
      .post("/getUserKyc", { userId: user?._id })
      .then((response) => {
        successToast(
          "We have received your request. We will get back to you soon."
        );
      })
      .catch((err) => {
        errorToast("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="text-deepBlue pt-10 lg:pt-20 h-screen flex flex-col items-center relative">
      <div
        className="mt-10 w-full lg:w-580 rounded-xl border-t-4 border-bgBlue pb-4 shadow-lg"
        style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-F5F8FF w-auto p-5 m-5 rounded-xl shadow text-deepBlue font-sans flex flex-col items-center justify-center space-y-2">
          <Avatar
            alt={user?.name}
            src={user?.picture}
            className={classes.large}
          />

          <div className="font-cunia text-24">{user?.name}</div>
          <div className="text-coolGray">{user?.email}</div>
        </div>
        <div className="m-5 bg-F5F8FF text-center w-auto p-5 rounded-xl text-deepBlue font-poppinsbold text-18 shadow">
          <div>{user?.planName === "Test" ? "Demo" : user?.planName} Plan</div>
          <div className="text-sm text-coolGray font-sans">
            Lifetime Validity
          </div>
        </div>
        {user?.planName !== "Test" && user?.remaining > 0 && (
          <div className="m-5 bg-F5F8FF text-center w-auto p-5 rounded-xl text-deepBlue font-poppinsbold text-18 shadow">
            <div>
              Remaining balance to be paid - Rs. {Math.ceil(user?.remaining)}
            </div>
          </div>
        )}
        {user?.planName && user?.planName !== "" && user?.planName !== "Test" && (
          <>
            <div className="flex flex-col items-center my-10">
              <button
                className="bg-green px-5 py-2 font-sans text-white rounded-full shadow-lg"
                onClick={() => refund()}
              >
                Ask for Refund
              </button>
            </div>
            <div className="px-7 pb-3 font-sans">
              * Read our{" "}
              <a
                href="/refund-policy"
                target="_blank"
                className="text-lightPink"
              >
                Refund Policy
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
