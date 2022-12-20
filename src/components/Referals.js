import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Button, CardContent, Typography } from "@mui/material";
import React from "react";
import { user } from "../data/user";
import { StyledCard, StyledCardHeader } from "../styles/styledCard";

const Referals = () => {
  return (
    <>
      <StyledCard elevation={0}>
        <StyledCardHeader
          title="Referals"
          titleTypographyProps={{ variant: "body", color: "primary.main" }}
        />

        <CardContent
          sx={{
            paddingLeft: "150px",
            paddingRight: "150px",
            paddingTop: "20px",
          }}
        >
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
              <InfoOutlinedIcon sx={{ color: "warning.main" }} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                pl={2}
                pr={12}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Typography variant="body" color="text.main">
                  How to use Referal Program
                </Typography>
                <Typography variant="body1" color="text.footer">
                  Use images to enhance your posts, improve its flow and humor
                  and explain complex topics. Connect with peers on finacial and
                  investment platforms.
                </Typography>
              </Box>
              <Box sx={{ width: "20%" }}>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    border: "2px solid",
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Box>
          <Box mt={3} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" color="text.main">
              Your Referal Link
            </Typography>
            <Typography mt={1} variant="body1" color="text.main">
              Plan your referal link distribution network. A blog post, video,
              forumns can be a great start.{" "}
            </Typography>
          </Box>
          <Box
            mt={3}
            sx={{
              display: "flex",
              alignItems: "center",
              border: "2px solid",
              borderColor: "border",
              padding: 1,
              borderRadius: "5px",
            }}
          >
            <Typography sx={{ flex: 1 }}>
              {user.referals.referalLink}
            </Typography>
            <Button>copy Link</Button>
          </Box>
          <Box
            mt={3}
            sx={{
              display: "flex",
              borderRadius: "5px",
              border: "2px solid",
              borderColor: "border",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 2,
                flex: 1,
                borderRight: "2px solid",
                borderColor: "border",
              }}
            >
              <Typography variant="body" color="text.main">
                Referals
              </Typography>
              <Typography variant="h2" color="text.main">
                {user.referals.number}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: 1,
                flex: 1,
              }}
            >
              <Typography variant="body" color="text.main">
                Balance
              </Typography>
              <Typography variant="h2" color="text.main">
                ${user.referals.referalBalance}
              </Typography>
            </Box>
          </Box>
          <Box mt={3} mb={3} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
              }}
            >
              <Typography variant="h4" color="text.main">
                Withdraw Money
              </Typography>
              <Typography mt={1} variant="body1" color="text.main">
                Withdraw your money to any bank account or mobile money.
                Withdraws should be at least $10.
              </Typography>
            </Box>
            <Box
              sx={{ width: "40%", display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                variant="outlined"
                size="small"
                sx={{
                  border: "2px solid",
                }}
              >
                Withdraw
              </Button>
            </Box>
          </Box>
        </CardContent>
      </StyledCard>
    </>
  );
};

export default Referals;
