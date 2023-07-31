import { Stack, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import classes from "./mainSection.module.css";
import HeaderImages from "./components/headerImages";
import TopNavigation from "./components/topNavigation";
import Banners from "./components/banners";
import Providers from "./components/providers";

const MainSection = () => {
  const theme = useTheme();
  const mediaQuery769 = useMediaQuery(theme.breakpoints.down("769"));
  const mediaQuery668 = useMediaQuery(theme.breakpoints.down("668"));
  const mediaQuery556 = useMediaQuery(theme.breakpoints.down("556"));
  const mediaQuery460 = useMediaQuery(theme.breakpoints.down("460"));

  return (
    <Stack
      className={classes.mainSection}
      spacing={2}
      sx={{
        flex: 1,
      }}
    >
      <HeaderImages />
      <TopNavigation
        mediaQuery460={mediaQuery460}
        mediaQuery556={mediaQuery556}
        mediaQuery668={mediaQuery668}
        mediaQuery769={mediaQuery769}
        customSx={{
          order: mediaQuery769 ? -1 : 0,
          margin: mediaQuery769 ? "0 0 1rem 0 !important" : "",
        }}
      />
      <Banners />
      <Providers />
    </Stack>
  );
};

export default MainSection;
