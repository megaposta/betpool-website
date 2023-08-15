import Image from "next/image";
import React from "react";
import classes from "./banners.module.css";

import { Grid } from "@mui/material";

const Banners = ({
  liveCasino,
  slotGames,
  sportsBetting,
  handleChange,
  handleScrollButtonClick,
}) => {
  return (
    <Grid container wrap="wrap" justifyContent={"space-between"} rowGap={2}>
      <Grid
        item
        xs={12}
        sm={5.8}
        md={3.8}
        className={classes.imgContainer}
        onClick={() => {
          handleChange(3);
          setTimeout(() => {
            handleScrollButtonClick();
          }, 300);
        }}
      >
        <Image
          src={liveCasino}
          alt={`banner image`}
          width={310}
          height={170}
          className={classes.bannerImg}
          priority
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5.8}
        md={3.8}
        className={classes.imgContainer}
        onClick={() => {
          handleChange(3);
          setTimeout(() => {
            handleScrollButtonClick();
          }, 300);
        }}
      >
        <Image
          src={slotGames}
          alt={`banner image`}
          width={310}
          height={170}
          className={classes.bannerImg}
          priority
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={5.8}
        md={3.8}
        className={classes.imgContainer}
        onClick={() => {
          handleChange(3);
          setTimeout(() => {
            handleScrollButtonClick();
          }, 300);
        }}
      >
        <Image
          src={sportsBetting}
          alt={`banner image`}
          width={310}
          height={170}
          className={classes.bannerImg}
          priority
        />
      </Grid>
    </Grid>
  );
};

export default Banners;
