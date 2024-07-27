import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState, useEffect } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import Logo from "../../../images/logo.svg";
import { useGoogleLogin } from "react-google-login";
import axios from "../../../axios";
import { infoToast } from "../../../utils/toast";
import { useStore } from "../../../store/index";
import { useTranslation } from "react-i18next";
import { SegmentedControl } from "../../atoms/segmented-control/segmented-control";

const useStyles = makeStyles(() => ({
  paper: {
    background: "#0e0e52",
  },
  header: {
    backgroundColor: "#0e0e52",
    paddingRight: "20px",
    paddingLeft: "20px",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  menuButton: {
    fontWeight: 400,
    size: "20px",
    marginLeft: "38px",
    fontFamily: "cunia",
    "&:hover": {
      borderBottom: "2px solid #E61A89",
      backgroundColor: "transparent",
      color: "#E61A89",
    },

    borderRadius: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "#0e0e52",
    backgroundColor: "#0e0e52",
  },
  drawerContainer: {
    padding: "20px 30px",
    boxShadow: 0,
    color: "#ffffff",
    backgroundColor: "#0e0e52",
    fontFamily: "sans",
  },
}));

export default function Header({
  navigateToHome = true,
  faqRef,
  plansRef,
  whyUsRef,
  howItWorksRef,
  headersData,
  contactRef,
  websiteContent,
  showMobileView = true,
}) {
  const [t, i18n] = useTranslation();

  const onSuccess = (response) => {
    if (response?.profileObj) {
      const { name, email, googleId } = response?.profileObj;

      axios
        .post("login-web", { name, email, accountId: googleId })
        .then((response) => {
          const data = response.data;
          if (!data.user.plan) {
            infoToast(
              "You do not have any active plan. Please purchase a plan from Earneasy24 app"
            );
            return;
          }
          localStorage.setItem("userId", data.user._id);
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.user.email);
          useStore.setState({ user: data.user });
          history.replace("/d");
        })
        .catch((err) => {
          infoToast(err.response.data.error, 6000);
          console.log(err.response.data);
        });
    }
  };

  const onFailure = (res) => {
    console.log(res);
    //errorToast("Something went wrong, please try again");
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId:
      "278241779648-q4tdbuvhovhnc2tk0mgdi5s4g3n31mom.apps.googleusercontent.com",
    isSignedIn: false,
    accessType: "offline",
  });

  const { header, menuButton, toolbar, drawerContainer } = useStyles();
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
    isHindi: false,
  });

  if (i18n.language === "en") {
    state.isHindi = false;
  } else {
    state.isHindi = true;
  }

  const { mobileView, drawerOpen } = state;

  const handleDrawerOpen = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: true }));
  const handleDrawerClose = () =>
    setState((prevState) => ({ ...prevState, drawerOpen: false }));

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  useEffect(() => {
    if (websiteContent?.defaultLanguage) {
      i18n.changeLanguage(websiteContent.defaultLanguage);
    }
  }, [websiteContent]);

  const scrollToView = (item) => {
    switch (item) {
      case "Home":
        history.push("/");
        break;
      case "Plans":
        plansRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "How It Works":
        howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Why Us":
        whyUsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "FAQs":
        faqRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "About":
        history.push("/about");
        break;
      case "Blog":
        history.push("/blog");
        break;
      case "Contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Login":
        signIn();
        break;
      default:
        break;
    }
    setTimeout(() => {
      if (drawerOpen) handleDrawerClose();
    }, 1000);
  };

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div className="flex items-center justify-end w-full">
          {getMenuButtons()}
          {headersData?.length > 0 && !websiteContent?.singleLanguage && (
            <div className="ml-8">
              <SegmentedControl
                size="sm"
                value={i18n.language}
                onChange={(value) => i18n.changeLanguage(value)}
                data={[
                  { label: "English", value: "en" },
                  { label: "हिंदी", value: "hi" },
                ]}
              />
            </div>
          )}
        </div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          classes={{ paper: classes.paper }}
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            {getDrawerChoicesMobile()}
            <br />
          </div>
        </Drawer>

        <div className="flex flex-row w-full items-center justify-between">
          {femmecubatorLogo}
          {headersData?.length > 0 && !websiteContent?.singleLanguage && (
            <div className="">
              <SegmentedControl
                size="sm"
                value={i18n.language}
                onChange={(value) => i18n.changeLanguage(value)}
                data={[
                  { label: "English", value: "en" },
                  { label: "हिंदी", value: "hi" },
                ]}
              />
            </div>
          )}
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoicesMobile = () => {
    return headersData.map(({ label, id }) => {
      return (
        <div
          {...{
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
          onClick={() => {
            scrollToView(label);
            //handleDrawerClose();
          }}
        >
          <MenuItem>
            {<div className="font-sans">{t(`header_menu.${id}`)}</div>}
          </MenuItem>
        </div>
      );
    });
  };

  const femmecubatorLogo = (
    <img
      loading="lazy"
      src={Logo}
      alt="Earn Easy Money App OR Earn Easy App"
      className="h-16 p-3 md:h-20 md:p-4 cursor-pointer"
      onClick={() => {
        if (navigateToHome) {
          window.scrollTo(0, 0);
          history.push("/");
        }
      }}
    />
  );

  const getMenuButtons = () => {
    return headersData.map(({ label }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            component: RouterLink,
            className: menuButton,
          }}
          onClick={() => scrollToView(label)}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={header} elevation={0}>
        {showMobileView && mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
