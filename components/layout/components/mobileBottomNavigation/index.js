import React from "react";
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import classes from "./mobileBottomNavigation.module.css";
import MobileMenu from "../../../../public/mobileFooterNavigationIcons/Mobile-Menu.svg";
import search from "../../../../public/mobileFooterNavigationIcons/search.svg";
import CenterLogo from "../../../../public/mobileFooterNavigationIcons/Center-Logo.svg";
import chats from "../../../../public/mobileFooterNavigationIcons/chats.svg";
import rewards from "../../../../public/mobileFooterNavigationIcons/rewards.svg";
const MobileBottomNavigation = (props) => {
  const theme = useTheme();
  const mediaQuery769 = useMediaQuery(theme.breakpoints.down("769"));
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={{
        display: mediaQuery769 ? "flex" : "none",
        position: "fixed",
        bottom: 0,
        left: 0,
        padding: "0.7rem 0",
        width: "100%",
        borderRadius: "16px 16px 0px 0px",
        borderTop: "1px solid  #B40909",
        background: "linear-gradient(180deg, #E10A0A 0%, #BA0C0C 100%)",
        zIndex: 900,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={props.handleDrawerOpen}
      >
        <Image src={MobileMenu} alt="Mobile Menu" width={24} height={24} />
        <Typography className={classes.title} variant="body2">
          Menu
        </Typography>
      </Box>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Image src={search} alt="search" width={24} height={24} />
        <Typography className={classes.title} variant="body2">
          Search
        </Typography>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Image src={CenterLogo} alt="Center Logo" width={46} height={46} />
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Image src={chats} alt="chats" width={24} height={24} />
        <Typography className={classes.title} variant="body2">
          Chat
        </Typography>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Image src={rewards} alt="rewards" width={24} height={24} />
        <Typography className={classes.title} variant="body2">
          Rewards
        </Typography>
      </Stack>
    </Stack>
  );
};

export default MobileBottomNavigation;
