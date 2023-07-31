import React from "react";
import classes from "./heroImage.module.css";
import Image from "next/image";
import heroImage from "../../../../../../public/landingPage/mainSection/HeaderImages.png";
import mobileHeroImage from "../../../../../../public/landingPage/mainSection/CasinoHeaderMobileImage.png";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const HeaderImages = () => {
  const theme = useTheme();
  const mediaQuery600 = useMediaQuery(theme.breakpoints.down("600"));
  const mediaQuery500 = useMediaQuery(theme.breakpoints.down("500"));
  return (
    <Box className={classes.imageContainer}>
      {mediaQuery500 ? (
        <Image
          src={mobileHeroImage}
          alt={"hero-image"}
          width={396}
          height={320}
          className={classes.heroImage}
          priority
        />
      ) : (
        <Image
          src={heroImage}
          alt={"hero-image"}
          width={1244}
          height={320}
          className={classes.heroImage}
          priority
        />
      )}
    </Box>
  );
};

export default HeaderImages;
