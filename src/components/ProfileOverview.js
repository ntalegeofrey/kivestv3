import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  Avatar,
  Box,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React from "react";
import { user } from "../data/user";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";
const ProfileOverview = () => {
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title="Profile Overview"
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />
        <CardContent
          sx={{
            paddingLeft: "150px",
            paddingRight: "150px",
            paddingTop: "40px",
          }}
        >
          {/* First row */}
          <Grid container display="flex" spacing={2}>
            {/* Avartar, Name and email*/}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <Avatar
                alt="profile-pic"
                src={user.overview.profilePic}
                sx={{
                  width: "80px",
                  height: "80px",
                  borderColor: "border",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "10px",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  variant="h4"
                  color="text.main"
                  sx={{ textAlign: "left" }}
                >
                  {user.overview.firstName}
                  &nbsp;
                  {user.overview.LastName}
                  &nbsp;
                  <span>
                    <Chip
                      label={user.overview.type}
                      size="small"
                      sx={{
                        backgroundColor: "badgeColors.info.background",
                        color: "badgeColors.info.text",
                        borderRadius: "5px",
                      }}
                    />
                  </span>
                </Typography>

                <Typography
                  variant="body1"
                  color="text.footnote"
                  textAlign="left"
                >
                  {user.overview.email}
                </Typography>
              </Box>
            </Grid>
            {/* balance and Join date*/}
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              display="flex"
              alignItems="center"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "100%",
                }}
              >
                <Typography variant="h4" color="text.main">
                  {user.accountBilling.currency}&nbsp; {user.overview.balance}
                </Typography>
                <Typography variant="body1" color="text.footnote">
                  Joined on {user.overview.dateJoined}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider
            sx={{ borderColor: "border", pt: "20px", borderBottomWidth: 2 }}
          />
          <Box pt={3} sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "30%",
              }}
            >
              <Typography variant="body" color="text.main">
                User ID:
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "70%",
              }}
            >
              <Typography variant="body" color="text.footnote">
                {user.overview.userID}
              </Typography>
            </Box>
          </Box>
          <Box pt={3} sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "30%",
              }}
            >
              <Typography variant="body" color="text.main">
                Username:
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "70%",
              }}
            >
              <Typography variant="body" color="text.footnote">
                {user.overview.userName}
              </Typography>
            </Box>
          </Box>
          <Box pt={3} sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "30%",
              }}
            >
              <Typography variant="body" color="text.main">
                Contact Phone:
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "70%",
              }}
            >
              <Typography variant="body" color="text.footnote">
                {user.overview.mobile}
              </Typography>
            </Box>
          </Box>
          <Box pt={3} pb={3} sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "30%",
              }}
            >
              <Typography variant="body" color="text.main">
                Country:
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "70%",
              }}
            >
              <Typography variant="body" color="text.footnote">
                {user.overview.country}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "25px",
              backgroundColor: "background2",
              display: "flex",
              borderRadius: "5px",
            }}
          >
            <Box>
              <VerifiedUserIcon sx={{ color: "warning.main" }} />
            </Box>
            <Box pl={2} sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="body" color="text.main">
                Secure your Account
              </Typography>
              <Typography variant="body1" color="text.footer">
                Two-factor authentication adds an extra layer of security to
                your account. To login, in addition you will need to provide a
                6-digit code.{" "}
                <span>
                  &nbsp;
                  <Link href="#" underline="always">
                    Learn More
                  </Link>
                </span>
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default ProfileOverview;
