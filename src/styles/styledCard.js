import { Card, CardHeader } from "@mui/material";
import { styled } from "@mui/material/styles";

// Paper
export const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  width: "100%",
  backgroundColor: theme.palette.white.main,
  borderRadius: "5px",
  border: "1.5px solid",
  borderColor: theme.palette.border,
}));

// card Header
export const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  borderBottom: "1.5px solid",
  borderColor: theme.palette.border,
}));
