import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import SwapHorizontalCircleRoundedIcon from "@mui/icons-material/SwapHorizontalCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ContactSupportRoundedIcon from "@mui/icons-material/ContactSupportRounded";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Transactions from "../pages/Transactions";
import Backtest from "../pages/Backtest";

export const NavItems = () => {
  const items = [
    {
      icon: <DashboardRoundedIcon fontSize="small" />,
      label: "Dashboard",
      id: "dashboard",
      path: "/user/dashboard",
      component: <Dashboard />,
    },
    {
      icon: <AccountCircleRoundedIcon fontSize="small" />,
      label: "Profile",
      id: "userProfile",
      path: "/user/account/",
      component: <Profile />,
    },
    {
      icon: <ReceiptRoundedIcon fontSize="small" />,
      label: "Transactions",
      id: "trandactions",
      path: "/user/transactions",
      component: <Transactions />,
    },
    {
      icon: <AutoGraphRoundedIcon fontSize="small" />,
      label: "Backtest",
      id: "backtest",
      path: "/user/backtest",
      component: <Backtest />,
    },
    {
      icon: <TimelineRoundedIcon fontSize="small" />,
      label: "Live Trade",
      id: "live-trading",
      path: "/user/live-trading",
      component: "",
    },
    {
      icon: <SwapHorizontalCircleRoundedIcon fontSize="small" />,
      label: "Exchanges",
      id: "exchanges",
      path: "/user/exchanges",
      component: "",
    },
    {
      icon: <SettingsRoundedIcon fontSize="small" />,
      label: "Settings",
      id: "settings",
      path: "/user/settings",
      component: "",
    },
    {
      icon: <ContactSupportRoundedIcon fontSize="small" />,
      label: "Support",
      id: "support",
      path: "/user/support",
      component: "",
    },
  ];
  return items;
};
