import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar, Badge, Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import profilePic from "../assets/profile-pic.webp";
import {
  IconContainer,
  SearchContainer,
  StyledAppBar,
  StyledBox3,
  StyledToolBar,
} from "../styles/StyledAppBar";

export const AppBar = () => {
  const pageHeaderState = useSelector((state) => state.pageHeader);
  const sideNavState = useSelector((state) => state.sideNavControl);

  return (
    <div>
      <StyledAppBar open={sideNavState} elevation={0}>
        <StyledToolBar>
          <Box sx={{ flex: 16 }}>
            <Typography variant="h4" noWrap component="div">
              {pageHeaderState}
            </Typography>
          </Box>
          <SearchContainer sx={{ flex: 1 }}>
            <IconButton disableRipple>
              <SearchOutlinedIcon fontSize="small" />
            </IconButton>
          </SearchContainer>
          <IconContainer sx={{ flex: 1 }}>
            <IconButton disableRipple>
              <Badge
                badgeContent={4}
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: 9,
                    height: 15,
                    minWidth: 15,
                  },
                }}
              >
                <NotificationsNoneOutlinedIcon fontSize="small" />
              </Badge>
            </IconButton>
            <IconButton disableRipple>
              <NightsStayOutlinedIcon fontSize="small" />
            </IconButton>
          </IconContainer>
          <StyledBox3 sx={{ flex: 1 }}>
            <Avatar
              alt="Ntale Geofrey"
              src={profilePic}
              sx={{
                height: "32px",
                width: "32px",
                "&:hover": { border: "2px solid lightgray" },
              }}
            />
          </StyledBox3>
          <Box sx={{ flex: 2 }}>
            <Typography variant="body" color="text.main">
              Ntale Geofrey
            </Typography>
          </Box>
        </StyledToolBar>
      </StyledAppBar>
    </div>
  );
};
