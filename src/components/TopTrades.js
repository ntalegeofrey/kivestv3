import {
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";
import { topTrades } from "../data/topTrades";

export const TopTrades = () => {
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title="Top Trades"
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <List sx={{ width: "100%" }}>
            {topTrades.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    borderBottom: "1px solid",
                    borderColor: (theme) => theme.palette.border,
                    "&:last-child": {
                      borderBottom: "0px",
                    },
                  }}
                >
                  <ListItemText
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography variant="body" color="text.main">
                      {item.asset}
                    </Typography>
                    <Typography variant="body2" color="text.main">
                      {item.date}
                    </Typography>
                  </ListItemText>
                  <ListItemText
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "right",
                    }}
                  >
                    <Typography variant="body" color="secondary.main">
                      +{item.pl}
                    </Typography>
                    <Typography variant="body2" color="text.main">
                      {item.unit}
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
      </StyledCard>
    </>
  );
};
