import {
  Button,
  CardActions,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";
import { topStrategies } from "../data/topStrategies";

export const TopStrategies = () => {
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title="Top Strategies"
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
            {topStrategies.map((item, index) => {
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
                      {item.strategy}
                    </Typography>
                    <Typography variant="body2" color="text.main">
                      {item.duration}
                    </Typography>
                  </ListItemText>
                  <ListItemText
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "right",
                    }}
                  >
                    <Typography variant="body" color="primary.main">
                      +{item.pl}
                    </Typography>
                    <Typography variant="body2" color="text.main">
                      {item.ROI}
                    </Typography>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Button sx={{ backgroundColor: "border" }}>
            <Typography variant="body2" color="text.main">
              See more ...
            </Typography>
          </Button>
        </CardActions>
      </StyledCard>
    </>
  );
};
