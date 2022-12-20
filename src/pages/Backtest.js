import { Container, Grid } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BacktestOverview from "../components/BacktestOverview";

function TabPanel(props) {
  const { children, value, index, classes, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BacktestTabs({ value, handleChange }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="backtest tabs">
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Performance" {...a11yProps(1)} />
          <Tab label="Trades" {...a11yProps(2)} />
        </Tabs>
      </Box>
    </Box>
  );
}

const Backtest = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <BacktestTabs value={value} handleChange={handleChange} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8.5}
          lg={8.5}
          sx={{ border: "1px solid", marginTop: 2, minHeight: "100vh" }}
        >
          <TabPanel value={value} index={0}>
            <BacktestOverview />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3.5}
          lg={3.5}
          sx={{ border: "1px solid", marginTop: 2 }}
        >
          Properties Pannel
        </Grid>
      </Grid>
    </>
  );
};

export default Backtest;
