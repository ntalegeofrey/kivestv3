import { Grid } from "@mui/material";
import React from "react";
import PaymentMethods from "../components/PaymentMethods";
import ProfileOverview from "../components/ProfileOverview";
import Referals from "../components/Referals";
import SignInMethod from "../components/SignInMethod";

const Profile = () => {
  return (
    <>
      <Grid
        container
        sx={{
          pt: 1,
        }}
        spacing={4}
      >
        <Grid item xs={12}>
          <ProfileOverview />
        </Grid>
        <Grid item xs={12}>
          <SignInMethod />
        </Grid>
        <Grid item xs={12}>
          <PaymentMethods />
        </Grid>
        <Grid item xs={12}>
          <Referals />
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
