import { Box, styled } from "@mui/material";

const drawerwidth = 230;
const minidrawer = 60;

// Content Container
export const MainContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  padding: theme.spacing(3),
  borderLeft: "1.5px solid",
  borderLeftColor: theme.palette.border,
  minHeight: "100vh",
  backgroundColor: theme.palette.background,
  ...(open && {
    width: `calc(100% - ${drawerwidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    width: `calc(100% - ${minidrawer}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
