import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: "#0E0E52",

    "& .heading-container": {
      "& .heading": {
        fontWeight: 700,
        fontSize: "44px",
      },

      "& img": {
        width: "3rem",
        height: "3rem",
      },
    },

    "& a": {
      "& button": {
        backgroundColor: "#2549A7",
        borderRadius: "4px",
        width: "70px",
        height: "40px",
      },
    },
  },
}));
export default function TransactionSuccess() {
  const classes = useStyles();
  return (
    <div
      className={`min-h-screen bg-customBlue p-10 flex items-center justify-center ${classes.mainContainer}`}
    >
      <div className="w-full bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <div className="mb-4 flex items-center heading-container">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center heading">
            Transaction Successful!
          </h2>

          <img
            decoding="async"
            draggable="false"
            role="img"
            className="ml-2 w-6 h-6"
            alt="👍"
            src="https://s.w.org/images/core/emoji/14.0.0/svg/1f44d.svg"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-lg text-gray-600">We got your payment</h2>
        </div>
        <div className="mb-4">
          <a href="https://play.google.com/store/apps/details?id=com.techaircraft.techaircraft">
            <button className="text-sm px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-300">
              OK
            </button>
          </a>
        </div>
        <div className="mb-4">
          <h2 className="text-lg text-gray-600 text-center">
            Return to your application,
            <br />
            <span className="text-customBlue">log in again,</span> Start
            learning &amp; Earning from TechAircraft.
          </h2>
        </div>
        <div className="mb-4">
          <h2 className="text-lg text-gray-600 text-center">
            अपने एप्लिकेशन पर वापस लौटें,
            <br />
            दोबारा लॉग इन करें और TechAircraft से सीखना और कमाई करना शुरू करें।
          </h2>
        </div>
      </div>
    </div>
  );
}
