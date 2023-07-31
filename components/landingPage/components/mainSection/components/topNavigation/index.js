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
import { useTranslation } from "next-i18next";

const TopNavigation = ({
  customSx,
  mediaQuery769,
  mediaQuery668,
  mediaQuery556,
  mediaQuery460,
}) => {
  const { t } = useTranslation();

  const data = [
    {
      title: t("TopNavigation.Home"),
      icon: homeIcon,
    },
    {
      title: t("TopNavigation.AllSports"),
      icon: allSportsIcon,
    },
    {
      title: t("TopNavigation.In-play"),
      icon: inPlayIcon,
    },
    {
      title: t("TopNavigation.Casino"),
      icon: casinoIcon,
    },
    {
      title: t("TopNavigation.LiveCasino"),
      icon: liveCasinoIcon,
    },
    {
      title: t("TopNavigation.Aviator"),
      icon: aviatorIcon,
    },
    {
      title: t("TopNavigation.Plinko"),
      icon: plinkoIcon,
    },
  ];

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      className={classes.topNavigationContainer}
      sx={{ ...customSx }}
      spacing={3}
      flexWrap={"wrap"}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={
          mediaQuery460 ? 0.1 : mediaQuery556 ? 1 : mediaQuery769 ? 2 : 1
        }
        rowGap={mediaQuery556 ? 2 : 0}
        flexWrap={"wrap"}
        width={mediaQuery668 ? "100%" : "auto"}
      >
        {data.map((item, index) => (
          <TopNavigationItem item={item} key={index} />
        ))}
      </Stack>
      <Box sx={{ display: mediaQuery668 ? "none" : "block" }}>
        <Image src={openChatIcon} alt="chat_icon" width={48} height={48} />
      </Box>
    </Stack>
  );
};

export default TopNavigation;
