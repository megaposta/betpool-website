import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import liveCasino from "../../../../../../public/landingPage/mainSection/banners/live-casino.png";
import slotGames from "../../../../../../public/landingPage/mainSection/banners/slot-games.png";
import sportsBetting from "../../../../../../public/landingPage/mainSection/banners/sports-betting.png";
const Banners = () => {
  return (
    <Grid container wrap="wrap" justifyContent={"space-between"}>
      <Grid item xs={12} sm={5} md={4}>
        <Image
          src={liveCasino}
          alt="Image 1"
          width={310}
          height={170}
          style={{ width: "95%" }}
        />
      </Grid>
      <Grid item xs={12} sm={5} md={4}>
        <Image
          src={slotGames}
          alt="Image 2"
          width={310}
          height={170}
          style={{ width: "95%" }}
        />
      </Grid>
      <Grid item xs={12} sm={5} md={4}>
        <Image
          src={sportsBetting}
          alt="Image 3"
          width={310}
          height={170}
          style={{ width: "95%" }}
        />
      </Grid>
    </Grid>
  );
};

export default Banners;
