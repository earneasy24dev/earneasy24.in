import { GoogleLogin } from "react-google-login";
import axios from "../../axios";
import { useState } from "react";
import { useStore } from "../../store/index";
import { useHistory } from "react-router-dom";
import LoginImage from "../../images/Mobile_login.png";
import Header from "../../components/organisms/header/header.component";
import CustomModal from "../../components/organisms/modals/modal";

const Login = () => {
  const history = useHistory();
  const setUser = useStore((state) => state.setUser);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialog, setDialog] = useState({
    title: "Maintainance",
    message:
      "Earneasy24 is currently down for maintainance. We expect to be back in a couple of hours. Thanks for patience.",
  });

  const responseGoogle = (response) => {
    if (response?.tokenId) {
      axios
        .post("login", { token: response?.tokenId, platform: "web" })
        .then((response) => {
          const data = response.data;
          if (
            data?.user?.planName !== "Test" &&
            data?.user?.platform === "app"
          ) {
            setDialog({
              title: "Access denied",
              message:
                "You are not authorizeed to use web version of this app, please contact us at help@earneasy24.com to get access.",
            });
            setDialogOpen(true);
            return;
          }
          if (!data?.user?.onHold && !data?.user?.deleted) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("session", data?.user?.sessionToken);
            setUser(data?.user);
            history.replace("/d");
          } else {
            setDialogOpen(true);
          }
        })
        .catch((err) => {
          setDialogOpen(true);
        });
    } else setDialogOpen(true);
  };
  const headersData = [];

  return (
    <div className="bg-DFEFFF h-screen">
      <Header
        headersData={headersData}
        navigateToHome={false}
        showMobileView={false}
      />

      <div className="absolute w-full h-full items-center flex justify-center">
        <div className="flex flex-col items-center lg:w-2/5 mx-5 lg:mx-0 bg-white shadow-xl rounded-xl p-7">
          <img
            loading="lazy"
            src={LoginImage}
            alt=""
            className="lg:w-2/5 w-1/2"
          />
          <h2 className="text-deepBlue font-cunia mt-8 text-4xl text-center">
            User Login
          </h2>

          <GoogleLogin
            className="my-12"
            clientId="278241779648-q4tdbuvhovhnc2tk0mgdi5s4g3n31mom.apps.googleusercontent.com"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />

          <p className="text-deepBlue text-sm font-poppinsbold text-center">
            By signing in you agree to our{" "}
            <a
              className="text-lightPink"
              href="/terms-conditions"
              target="_blank"
              rel="noreferrer"
            >
              Terms,
            </a>{" "}
            <a
              className="text-lightPink"
              href="/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              className="text-lightPink"
              href="/refund-policy"
              target="_blank"
              rel="noreferrer"
            >
              Refund Policy
            </a>
          </p>
        </div>
      </div>
      <CustomModal
        className={`${isDialogOpen ? "block" : "hidden"}`}
        openDialog={setDialogOpen}
        title={dialog.title}
        message={dialog.message}
      />
    </div>
  );
};

export default Login;
