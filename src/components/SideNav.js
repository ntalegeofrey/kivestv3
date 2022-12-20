import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import longlogo from "../assets/kivest-logo.svg";
import shortlogo from "../assets/kivest-mini-logo.svg";
import infoImg from "../assets/Uploading-rafiki.svg";
import { NavItems } from "../data/nav-items";
import { miniSideNav, pageHeader } from "../redux/actions";
import {
  Img,
  Img2,
  InfoImg,
  Label,
  LogoBox,
  NavOpenIcon,
  SideNavBalance,
  SideNavFooter,
  SideNavHeader,
  SideNavInfo,
  SideNavList,
  StyledListItemButton,
  StyledSideNav,
  StyledToolTip,
} from "../styles/StyledSideNav";

const SideNav = () => {
  const dispatch = useDispatch();
  const sideNavState = useSelector((state) => state.sideNavControl);
  const handleClick = (label) => () => {
    console.log(label);
    dispatch(pageHeader(label));
  };

  return (
    <>
      <StyledSideNav variant="permanent" open={sideNavState}>
        <SideNavHeader>
          <LogoBox>
            {sideNavState ? (
              <Img src={longlogo} alt="logo" />
            ) : (
              <Img2
                src={shortlogo}
                alt="logo"
                onClick={() => dispatch(miniSideNav())}
              />
            )}
          </LogoBox>
          <NavOpenIcon disableRipple onClick={() => dispatch(miniSideNav())}>
            {sideNavState && <ChevronLeftIcon />}
          </NavOpenIcon>
        </SideNavHeader>
        {sideNavState && (
          <SideNavBalance>
            <Box>
              <Label>
                <Typography variant="body2" color="white.main">
                  New
                </Typography>
              </Label>
            </Box>
            <Typography variant="h3" color="primary">
              $2,650
            </Typography>
            <Typography variant="subtitle2" color="text.subtle" pt={1}>
              Current balance
            </Typography>
          </SideNavBalance>
        )}
        <SideNavList open={sideNavState}>
          <List
            sx={{
              flex: 1,
              pr: 1,
            }}
          >
            {NavItems().map((item, index) => {
              return (
                <React.Fragment key={item.id}>
                  <ListItem disablePadding onClick={handleClick(item.label)}>
                    {sideNavState === false ? (
                      <StyledToolTip title={item.label} placement="right" arrow>
                        <StyledListItemButton
                          disableRipple
                          component={NavLink}
                          to={item.path}
                          exact={true}
                          sx={{ width: "52px" }}
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.label} />
                        </StyledListItemButton>
                      </StyledToolTip>
                    ) : (
                      <StyledListItemButton
                        disableRipple
                        component={NavLink}
                        to={item.path}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label} />
                      </StyledListItemButton>
                    )}
                  </ListItem>
                </React.Fragment>
              );
            })}
          </List>
        </SideNavList>
        {sideNavState && (
          <SideNavInfo>
            <Box sx={{ whiteSpace: "pre-wrap" }}>
              <Typography
                variant="subtitle2"
                color="text.body"
                sx={{ textAlign: "center" }}
              >
                Upgrade Now and <strong>Live Trade your strategy</strong> on
                auto Pilot!
              </Typography>
            </Box>
            <InfoImg src={infoImg} alt="info card" />
          </SideNavInfo>
        )}
        <SideNavFooter>
          {sideNavState ? (
            <Typography variant="footnote" color="text.main">
              &copy; &nbsp; Copyright 2022 Kreatree Tech
            </Typography>
          ) : (
            <Typography
              variant="footnote"
              color="text.main"
              sx={{ whiteSpace: "nowrap", textAlign: "center" }}
            >
              <strong>Kivest</strong>
              <br></br>
              &copy; 2022
            </Typography>
          )}
        </SideNavFooter>
      </StyledSideNav>
    </>
  );
};

export default SideNav;
