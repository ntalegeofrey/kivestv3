import { Avatar, Box, CardContent, Typography } from "@mui/material";
import React from "react";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";

const BalanceSummary = (props) => {
  const {
    title,
    amount,
    icon,
    increase,
    accentColor,
    otherColor,
    increaseColor,
    category,
  } = props;
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title={title}
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />

        <CardContent
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body" color={otherColor}>
              {category}
            </Typography>
            <Typography variant="h3" color={accentColor}>
              {amount}
            </Typography>
            <span>
              <Typography variant="body" color={increaseColor}>
                {increase}
              </Typography>
              <Typography variant="body" color={otherColor}>
                &nbsp;since last month
              </Typography>
            </span>
          </Box>
          <Box>
            <Avatar sx={{ color: "white.main", bgcolor: accentColor }}>
              {icon}
            </Avatar>
          </Box>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default BalanceSummary;
