import MyAccount from "../components/organisms/myAccount/myAccount";
import Notifications from "../components/organisms/notifications/notifications";
import Wallet from "../components/organisms/wallet/wallet";
import WithdrawHistory from "../components/organisms/withdraw_history/withdraw_history";
import Dash from "../pages/dashboard.user/dashboard.user";

export const dashboardRoutes = [
  {
    path: "/d/dash",
    title: "Dashboard",
    component: Dash,
    description: "Dashboard",
    id: "dashboard",
  },
  {
    path: "/d/wallet",
    title: "Wallet",
    component: Wallet,
    description: "Wallet",
    id: "wallet",
  },
  {
    path: "/d/withdraw-history",
    title: "Withdraw History",
    component: WithdrawHistory,
    description: "Withdraw History",
    id: "wallet",
  },
  {
    path: "/d/notifications",
    title: "Notifications",
    component: Notifications,
    description: "Notifications",
    id: "notifications",
  },
  {
    path: "/d/account",
    title: "My Account",
    component: MyAccount,
    description: "myaccount",
    id: "myaccount",
  },
];
