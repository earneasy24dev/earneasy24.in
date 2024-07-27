import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { ListItemIcon } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import Logo from "../../../images/logo.svg";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import HelpIcon from "@material-ui/icons/Help";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
// import ShareIcon from "@material-ui/icons/Share";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HistoryIcon from "@material-ui/icons/History";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomModal from "../modals/modal";
import { useStore } from "../../../store";
import whatsapplogo from "../../../assets/social/whatsapp.png";
import MessageIcon from "@material-ui/icons/Message";
import PaymentProofsModal from "../modals/PaymentProofsModal";
import { useUser } from "../../../hooks/use-user";
import axios from "../../../axios";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: "#DFEFFF",
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  paper: {
    background: "#0e0e52",
    color: "#ffffff",
  },
}));
const ResponsiveDrawer = ({ children }) => {
  const { data: user } = useUser();
  const websiteContent = useStore((state) => state.websiteContent);
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [isPaymentProofOpen, setPaymentProofOpen] = React.useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("");

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  useEffect(() => {
    axios.get("getEearneasyWhatsapp").then((response) => {
      if (response?.data) {
        setWhatsappNumber(response?.data?.number);
      }
    });
  }, []);

  const drawer = (
    <div className="lg:mr-8 ">
      <List className="w-full space-y-2">
        <Link to="/d/dash">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon className="text-white lg:text-deepBlue font-sans" />
            </ListItemIcon>
            <div className="text-white text-15 lg:text-deepBlue font-sans">
              Home
            </div>
          </ListItem>
        </Link>

        <Link to="/d/wallet">
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWalletIcon className="text-white lg:text-deepBlue font-sans" />
            </ListItemIcon>
            <div className="text-white text-15 lg:text-deepBlue font-sans">
              Wallet
            </div>
          </ListItem>
        </Link>

        <Link to="/d/withdraw-history">
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon className="text-white lg:text-deepBlue font-sans" />
            </ListItemIcon>
            <div className="text-white text-15 lg:text-deepBlue font-sans">
              Withdraw History
            </div>
          </ListItem>
        </Link>

        <Link to="/d/account">
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon className="text-white lg:text-deepBlue font-sans" />
            </ListItemIcon>
            <div className="text-white text-15 lg:text-deepBlue font-sans">
              My Account
            </div>
          </ListItem>
        </Link>

        <Link to="/d/notifications">
          <ListItem button>
            <ListItemIcon>
              <MessageIcon className="text-white lg:text-deepBlue font-sans" />
            </ListItemIcon>
            <div className="text-white text-15 lg:text-deepBlue font-sans">
              View Messages
            </div>
          </ListItem>
        </Link>

        <ListItem button onClick={() => setDialogOpen(true)}>
          <ListItemIcon>
            <PhoneInTalkIcon className="text-white lg:text-deepBlue font-sans" />
          </ListItemIcon>
          <div className="text-white text-15 lg:text-deepBlue font-sans">
            Support
          </div>
        </ListItem>

        {user && user?.planName === "Test" && (
          <>
            {websiteContent?.showPaymentProofs && (
              <ListItem button onClick={() => setPaymentProofOpen(true)}>
                <ListItemIcon>
                  <LiveHelpIcon className="text-white lg:text-deepBlue font-sans" />
                </ListItemIcon>
                <div className="text-white text-15 lg:text-deepBlue font-sans">
                  Payment Proofs
                </div>
              </ListItem>
            )}
            <ListItem
              button
              onClick={() => {
                const win = window.open(
                  "https://earneasy24.com/how-it-works",
                  "_blank"
                );
                win.focus();
              }}
            >
              <ListItemIcon>
                <HelpIcon className="text-white lg:text-deepBlue font-sans" />
              </ListItemIcon>
              <div className="text-white text-15 lg:text-deepBlue font-sans">
                How it works?
              </div>
            </ListItem>
          </>
        )}

        <ListItem
          button
          onClick={() => {
            localStorage.clear();
            history.replace("/login");
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon className="text-white lg:text-deepBlue font-sans" />
          </ListItemIcon>
          <div className="text-white text-15 lg:text-deepBlue font-sans">
            Logout
          </div>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ background: "#0e0e52" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="w-full flex justify-between content-center items-center">
            <img
              loading="lazy"
              src={Logo}
              className="hidden lg:block w-40 "
              alt="Earn Easy Money App OR Earn Easy App"
            />
            <div></div>
            <div className="flex flex-row h-full items-center content-center gap-5 lg:gap-8 lg:mr-8">
              <Link to="/d/wallet">
                <AccountBalanceWalletIcon className="hover:text-lightPink cursor-pointer" />
              </Link>
              <Link to="/d/notifications">
                <NotificationsIcon className="hover:text-lightPink cursor-pointer" />
              </Link>

              <ExitToAppIcon
                className="hover:text-lightPink cursor-pointer"
                onClick={() => {
                  localStorage.clear();
                  history.replace("/login");
                }}
              />
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.paper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon className="text-white" />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.content}>{children}</div>

      <CustomModal
        className={`${isDialogOpen ? "block" : "hidden"}`}
        openDialog={setDialogOpen}
        title={"Support"}
        message={`For support or enquiry, email us at <a class='text-bgBlue font-semibold' href = 'mailto: ${websiteContent?.email}'>${websiteContent?.email}</a>`}
      />

      <PaymentProofsModal
        opened={isPaymentProofOpen}
        setOpened={setPaymentProofOpen}
      />

      {user?.planName === "Test" && whatsappNumber !== "" && (
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
    </div>
  );
};

export default ResponsiveDrawer;
