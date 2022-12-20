import { CardContent } from "@mui/material";
import React from "react";
import PerformanceCurve from "../graphs/PerformanceCurve";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";

const BacktestOverview = () => {
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title={<span>Moving Average Strategy</span>}
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <PerformanceCurve />
        </CardContent>
      </StyledCard>
    </>
  );
};

export default BacktestOverview;
