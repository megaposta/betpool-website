import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "./topNavigationItem.module.css";

const TopNavigationItem = ({ item, activeClass }) => {
  const theme = useTheme();
  const mediaQuery400 = useMediaQuery(theme.breakpoints.down("400"));
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      spacing={mediaQuery400 ? 1 : 2}
      className={classes.ItemContainer}
    >
      <Box
        className={`${classes.iconContainer} ${
          activeClass ? classes.activeIconContainer : ""
        }`}
      >
        <Image
          src={item.icon}
          alt="icon"
          width={32}
          height={32}
          className={`${classes.iconStyle} ${
            activeClass ? classes.activeIconStyle : ""
          }`}
        />
      </Box>
      <Typography
        variant="p"
        className={`${classes.title} ${activeClass ? classes.activeTitle : ""}`}
        suppressHydrationWarning
      >
        {item.title}
      </Typography>
    </Stack>
  );
};

export default TopNavigationItem;
