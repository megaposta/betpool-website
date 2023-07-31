import Image from "next/image";
import React from "react";
import classes from "./banners.module.css";
import liveCasino from "../../../../../../public/landingPage/mainSection/banners/live-casino.png";
import slotGames from "../../../../../../public/landingPage/mainSection/banners/slot-games.png";
import sportsBetting from "../../../../../../public/landingPage/mainSection/banners/sports-betting.png";

import { Grid } from "@mui/material";

const Banners = () => {
  return (
    <Grid container wrap="wrap" justifyContent={"space-between"} rowGap={2}>
      {[liveCasino, slotGames, sportsBetting].map((item, index) => (
        <Grid
          item
          xs={12}
          sm={5.8}
          md={3.8}
          key={index}
          className={classes.imgContainer}
        >
          <Image
            src={item}
            alt={`banner image ${index}`}
            width={310}
            height={170}
            className={classes.bannerImg}
            priority
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Banners;
