import { Box, Grid } from "@mui/material";
import React from "react";
import BalanceSummary from "../components/BalanceSummary";
import PortfolioOverview from "../components/PortfolioOverview";
import { useTheme } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PaymentsIcon from "@mui/icons-material/Payments";
import TradeHistory from "../components/TradeHistory";
import { OverallGrowth } from "../components/OverallGrowth";
import { TopTrades } from "../components/TopTrades";
import { TopStrategies } from "../components/TopStrategies";

const Dashboard = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const text = theme.palette.text.footnote;
  const strongText = theme.palette.text.main;
  return (
    <>
      <Grid
        container
        sx={{
          pt: 1,
        }}
        spacing={4}
      >
        <Grid container item xs={12} sm={12} md={7.5} ld={7.5} spacing={2}>
          <Grid item xs={12}>
            <PortfolioOverview />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={6} zeroMinWidth>
              <BalanceSummary
                title={"Balance"}
                amount={"$3,800"}
                icon={<AccountBalanceWalletIcon />}
                increase={"+15%"}
                accentColor={primary}
                otherColor={text}
                increaseColor={strongText}
                category={"Revenue"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} zeroMinWidth>
              <BalanceSummary
                title={"Income"}
                amount={"$257"}
                icon={<PaymentsIcon />}
                increase={"+10%"}
                accentColor={secondary}
                otherColor={text}
                increaseColor={strongText}
                category={"Profit"}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <TradeHistory />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={12} md={4.5} lg={4.5} spacing={2}>
          <Grid item xs={12} zeroMinWidth>
            <OverallGrowth />
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <TopTrades />
          </Grid>
          <Grid item xs={12} zeroMinWidth>
            <Box>
              <TopStrategies />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
