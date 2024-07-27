import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  mainContainer: {
    backgroundColor: "#0E0E52",

    "& svg": {
      fontSize: "82px",
    },

    "& h2": {
      fontWeight: 700,
      fontSize: "44px",
    },

    "& h3": {
      fontSize: "19px",
      fontWeight: 300,
      lineHeight: "24px",
    },

    "& a": {

      "& button": {
        backgroundColor: "#2549A7",
        borderRadius: "4px",
        width:'70px',
        height:'40px'
      },
      
    },
  },
}));

export default function PaymentFailed() {
  const classes = useStyles();
  return (
    <div
      className={`min-h-screen p-10 flex items-center justify-center
     ${classes.mainContainer}`}
    >
      <div className="w-full flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="flex justify-center items-center mb-4">
          <svg
            aria-hidden="true"
            fill="#FF0000"
            className="w-20 h-20 text-red-600"
            viewBox="0 0 352 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Payment Failed! 👎
        </h2>
        <h3 className="text-lg text-gray-600 mb-4">Your payment got failed</h3>
        <a href="https://play.google.com/store/apps/details?id=com.techaircraft.techaircraft">
          <button className="text-sm px-4 py-2 text-white rounded shadow hover:bg-blue-600 transition duration-300">
            OK
          </button>
        </a>
      </div>
    </div>
  );
}
