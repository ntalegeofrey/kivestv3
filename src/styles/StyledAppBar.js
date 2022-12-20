import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Box, Toolbar } from "@mui/material";

const drawerwidth = 230;
const minidrawer = 60;

// App bar
export const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "flex",
  borderBottom: "1.5px solid",
  borderLeft: "1.5px solid",
  borderLeftColor: theme.palette.border,
  borderBottomColor: theme.palette.border,
  ...(open && {
    marginLeft: drawerwidth,
    width: `calc(100% - ${drawerwidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: minidrawer,
    width: `calc(100% - ${minidrawer}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// Tool Bar
export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  minHeight: "55px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  padding: "8px 16px",
  boxSizing: "inherit",
  backgroundColor: theme.palette.white.main,
}));
// App bar Box
export const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  border: "1.5px solid",
  borderLeftColor: theme.palette.border,
}));
export const SearchContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  border: "1.5px solid",
}));
export const StyledBox3 = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  border: "1.5px solid",
  verticalAlign: "middle",
  borderLeftColor: theme.palette.border,
}));
