import { CardContent } from "@mui/material";
import React from "react";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";
import { HalfDoughnutChart } from "../graphs/HalfDoughnutChart";

export const OverallGrowth = () => {
  const dt = [40, 60];
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title="Overall Growth"
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <HalfDoughnutChart gdata={dt} />
        </CardContent>
      </StyledCard>
    </>
  );
};
