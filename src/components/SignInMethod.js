import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Box, Button, CardContent, Switch, Typography } from "@mui/material";
import React from "react";
import { user } from "../data/user";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";

const SignInMethod = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title="Sign in Method"
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />

        <CardContent
          sx={{
            paddingLeft: "150px",
            paddingRight: "150px",
            paddingTop: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              borderBottom: "1.5px solid",
              borderColor: "border",
              paddingBottom: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <Typography variant="body" color="text.main">
                {user.signInMethod.emailMethod.method}
              </Typography>
              <Typography variant="body1" color="text.footnote">
                {user.signInMethod.emailMethod.email}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant="outlined"
                size="small"
                sx={{ border: "2px solid" }}
              >
                Disable
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              borderBottom: "1.5px solid",
              borderColor: "border",
              paddingBottom: 2,
              paddingTop: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <Typography variant="body" color="text.main">
                {user.signInMethod.mobileMethod.method}
              </Typography>
              <Typography variant="body1" color="text.footnote">
                +{user.signInMethod.mobileMethod.mobile}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  borderBottom: "2px solid",
                  borderColor: "primary.main",
                }}
              >
                Enable
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "25px",
              backgroundColor: "background2",
              display: "flex",
              borderRadius: "5px",
              marginTop: 3,
            }}
          >
            <Box>
              <VerifiedUserIcon sx={{ color: "warning.main" }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                pl={2}
                pr={12}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="body" color="text.main">
                  Secure your Account
                </Typography>
                <Typography variant="body1" color="text.footer">
                  Two-factor authentication adds an extra layer of security to
                  your account. To login, in addition you will need to provide a
                  6-digit code.{" "}
                </Typography>
              </Box>
              <Box>
                <Switch {...label} />
              </Box>
            </Box>
          </Box>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default SignInMethod;
