import { Stack } from "@mui/material";
import React from "react";
import classes from "./mainSection.module.css";
import HeaderImages from "./components/headerImages";
import TopNavigation from "./components/topNavigation";
import Banners from "./components/banners";
import Providers from "./components/providers";

const MainSection = () => {
  return (
    <Stack className={classes.mainSection} spacing={2}>
      <HeaderImages />
      <TopNavigation />
      <Banners />
      <Providers />
    </Stack>
  );
};

export default MainSection;
