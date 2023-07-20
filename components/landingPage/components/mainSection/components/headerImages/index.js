import React from "react";
import classes from "./heroImage.module.css";
import Image from "next/image";
import heroImage from "../../../../../../public/landingPage/mainSection/HeaderImages.png";
import { Box } from "@mui/material";

const HeaderImages = () => {
  return (
    <Box className={classes.imageContainer}>
      <Image
        src={heroImage}
        alt={"hero-image"}
        width={1244}
        height={320}
        className={classes.heroImage}
        priority
      />
    </Box>
  );
};

export default HeaderImages;
