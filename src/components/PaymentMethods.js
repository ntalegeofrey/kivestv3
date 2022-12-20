import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import {
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import { Mastercard, Visa } from "react-pay-icons";
import { user } from "../data/user";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";

const PaymentMethods = () => {
  const maskedText = (txt) => {
    const [firstpart, secondpart] = txt.split(txt[txt.length - 3]);

    return `${new Array(secondpart.length).join("*")}${new Array(
      firstpart.length
    ).join("*")}${txt.slice(-4)}`;
  };

  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title="Payment Methods"
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />
        <CardContent
          sx={{
            paddingLeft: "150px",
            paddingRight: "150px",
            paddingTop: "40px",
          }}
        >
          <List>
            {user.accountBilling.paymentMethods.cards.map((item, index) => (
              <React.Fragment key={item.cardNumber}>
                <ListItem
                  sx={{
                    display: "flex",
                    borderBottom: "2px solid",
                    borderColor: "border",
                    paddingBottom: 2,
                  }}
                >
                  <ListItemIcon sx={{ display: "flex", alignItems: "center" }}>
                    {item.type === "Visa" ? (
                      <Visa style={{ width: 40 }} />
                    ) : (
                      <Mastercard style={{ width: 40 }} />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    ml={4}
                    sx={{ display: "flex", flexDirection: "column" }}
                  >
                    <Typography variant="body" color="text.main">
                      {maskedText(item.cardNumber)}
                    </Typography>
                    <Typography variant="body1" color="text.footnote">
                      Expires on {item.expiry}
                    </Typography>
                  </ListItemText>
                  <ListItemIcon
                    sx={{
                      flex: 2,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Switch />
                  </ListItemIcon>
                </ListItem>
              </React.Fragment>
            ))}
            {user.accountBilling.paymentMethods.mobileMoney.map(
              (item, index) => (
                <React.Fragment key={item.cardNumber}>
                  <ListItem
                    sx={{
                      display: "flex",
                      borderBottom: "2px solid",
                      borderColor: "border",
                      paddingBottom: 2,
                      "&:last-child": {
                        borderBottom: "0px",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <MobileFriendlyIcon
                        sx={{ color: "primary.main", width: "40px" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      ml={4}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Typography variant="body" color="text.main">
                        {item.cardNumber}
                      </Typography>
                      <Typography variant="body1" color="text.footnote">
                        {item.provider}
                      </Typography>
                    </ListItemText>
                    <ListItemIcon
                      sx={{
                        flex: 2,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Switch />
                    </ListItemIcon>
                  </ListItem>
                </React.Fragment>
              )
            )}
          </List>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default PaymentMethods;
