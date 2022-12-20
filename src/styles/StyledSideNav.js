// Imports
import { Box, IconButton, ListItemButton, Tooltip } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

/* Break the styles of a component into states i.e first define the styles of a component according to its state. */
/* Drawer states (open and close) */
const drawerwidth = 230;
const minidrawer = 60;

// styles for states
// 1. Open state
const opened = (theme) => ({
  width: drawerwidth,
  overFlowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

// 2. Close state
const closed = (theme) => ({
  width: "60px",
  overFlowX: "hidden",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
});

// Styled Sidenav.
export const StyledSideNav = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.white.main,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiDrawer-paper": {
    scrollbars: {},
  },
  ...(open && {
    ...opened(theme),
    "& .MuiDrawer-paper": {
      ...opened(theme),
      width: drawerwidth,
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#D3D3D3",
      },
      "&::-webkit-scrollbar-track": {
        background: "#fffff",
        boxShadow: "grey",
        borderRadius: "20px",
      },
      "&::-webkit-scrollbar-thumb": {
        boxShadow: "grey",
        borderRadius: "20px",
        backgroundColor: "#fffff",
      },
    },
  }),
  ...(!open && {
    ...closed(theme),
    "& .MuiDrawer-paper": {
      ...closed(theme),
      width: minidrawer,
      scrollbarWidth: "thin",
      "&::-webkit-scrollbar": {
        width: "6px",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "#D3D3D3",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "grey",
        borderRadius: "20px",
        background: "#ffffff",
      },
      "&::-webkit-scrollbar-thumb": {
        boxShadow: "grey",
        borderRadius: "20px",
        backgroundColor: "#fffff",
      },
    },
  }),
}));

// Nav Header
export const SideNavHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: theme.spacing(2),
  borderBottom: "1.5px solid",
  borderColor: theme.palette.border,
  minHeight: "55px",
}));

// Nav Balance
export const SideNavBalance = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.sidenav.balance,
  paddingTop: "30px",
  paddingBottom: "30px",
  borderBottom: "1.5px solid",
  borderColor: theme.palette.border,
}));

// Nav List
export const SideNavList = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  borderBottom: "1.5px solid",
  borderColor: theme.palette.border,
  paddingTop: "20px",
  ...(!open && { paddingBottom: `calc(100vh - 230px)` }),
  ...(open && { paddingBottom: "20px" }),
}));

// Nav Info
export const SideNavInfo = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: theme.spacing(2),
  borderBottom: "1.5px solid",
  borderColor: theme.palette.border,
}));

// Nav Footer
export const SideNavFooter = styled("footer")(({ theme }) => ({
  textAlign: "center",
  whiteSpace: "normal",
  padding: theme.spacing(2),
}));

// logo box
export const LogoBox = styled(Box)(({ theme }) => ({
  flex: 1,
}));

// Iconopen box
export const NavOpenIcon = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.transparent.main,
  },
}));

// longLogo img
export const Img = styled("img")(({ theme }) => ({
  width: "40%",
}));

// longLogo img
export const Img2 = styled("img")(({ theme }) => ({
  width: "25px",
  height: "25px",
}));

// info img
export const InfoImg = styled("img")(({ theme }) => ({
  width: "60%",
}));

// badge Label
export const Label = styled("div")(({ theme }) => ({
  width: "40px",
  textAlign: "center",
  verticalAlign: "middle",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "3px",
  marginLeft: "60px",
}));
// nav List button
export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "exact",
})(({ theme }) => ({
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "5px",
  height: "35px",
  "& .MuiListItemIcon-root": {
    color: theme.palette.icons.main,
  },
  "& .MuiListItemText-primary": {
    color: theme.palette.text.main,
  },
  "&:hover": {
    "& .MuiListItemIcon-root": { color: theme.palette.text.main },
  },
  "&.active": {
    backgroundColor: theme.palette.primary.main,
    "& .MuiListItemText-primary": { color: theme.palette.white.main },
    "& .MuiListItemIcon-root": { color: theme.palette.white.main },
  },
}));

// toolTip
export const StyledToolTip = styled(Tooltip)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
