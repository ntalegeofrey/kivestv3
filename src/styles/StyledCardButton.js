import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled card Button.
export const StyledCardButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  ...(active && {
    color: theme.palette.white.main,
  }),
  ...(!active && {
    color: theme.palette.text.main,
    borderColor: theme.palette.button.grey,
    "&:hover": { borderColor: theme.palette.text.main },
  }),
}));
