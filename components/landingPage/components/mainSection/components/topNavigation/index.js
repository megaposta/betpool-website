import { Box, Stack } from "@mui/material";
import React from "react";
import homeIcon from "../../../../../../public/landingPage/mainSection/topNavigation/home.svg";
import allSportsIcon from "../../../../../../public/landingPage/mainSection/topNavigation/all-sports.svg";
import inPlayIcon from "../../../../../../public/landingPage/mainSection/topNavigation/in-play.svg";
import casinoIcon from "../../../../../../public/landingPage/mainSection/topNavigation/casino.svg";
import liveCasinoIcon from "../../../../../../public/landingPage/mainSection/topNavigation/live-casino.svg";
import aviatorIcon from "../../../../../../public/landingPage/mainSection/topNavigation/aviator.svg";
import plinkoIcon from "../../../../../../public/landingPage/mainSection/topNavigation/plinko.svg";
import openChatIcon from "../../../../../../public/landingPage/mainSection/topNavigation/open-chat-icon.png";
import TopNavigationItem from "./components/topNavigationItem";
import classes from "./topNavigationContainer.module.css";
import Image from "next/image";

const data = [
  {
    title: "Home",
    icon: homeIcon,
  },
  {
    title: "All Sports",
    icon: allSportsIcon,
  },
  {
    title: "In-Play",
    icon: inPlayIcon,
  },
  {
    title: "Casino",
    icon: casinoIcon,
  },
  {
    title: "Live Casino",
    icon: liveCasinoIcon,
  },
  {
    title: "Aviator",
    icon: aviatorIcon,
  },
  {
    title: "Plinko",
    icon: plinkoIcon,
  },
];

const TopNavigation = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      className={classes.topNavigationContainer}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        {data.map((item, index) => (
          <TopNavigationItem item={item} key={index} />
        ))}
      </Stack>
      <Box>
        <Image src={openChatIcon} alt="chat_icon" width={48} height={48} />
      </Box>
    </Stack>
  );
};

export default TopNavigation;
