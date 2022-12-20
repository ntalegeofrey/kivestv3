import { Box, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { PortfolioOverviewGraph } from "../graphs/PortfolioOverviewGraph";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";
import { StyledCardButton } from "../styles/StyledCardButton";

const PortfolioOverview = () => {
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title="Portfolio Overview"
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />
        <CardContent sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" color="text.main">
              $2,670
            </Typography>
            <Typography variant="body2" color="text.main">
              Total Income
            </Typography>
          </Box>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <StyledCardButton variant="contained" size="small" active={true}>
              Monthly
            </StyledCardButton>
            <StyledCardButton variant="outlined" size="small" active={false}>
              Weekly
            </StyledCardButton>
            <StyledCardButton variant="outlined" size="small" active={false}>
              Daily
            </StyledCardButton>
          </CardActions>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <PortfolioOverviewGraph />
        </CardContent>
      </StyledCard>
    </>
  );
};

export default PortfolioOverview;
