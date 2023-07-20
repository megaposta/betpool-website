import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "./topNavigationItem.module.css";
// import { useRouter } from "next/router";

const TopNavigationItem = ({ item }) => {
  // const router = useRouter();
  // const currentURL = router.asPath;
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      spacing={2}
      className={classes.ItemContainer}
    >
      <Box className={`${classes.iconContainer}`}>
        <Image
          src={item.icon}
          alt="icon"
          width={32}
          height={32}
          className={classes.iconStyle}
        />
      </Box>
      <Typography variant="p" className={classes.title}>
        {item.title}
      </Typography>
    </Stack>
  );
};

export default TopNavigationItem;
