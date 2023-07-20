import React from "react";
import Grid from "@mui/material/Grid";
import classes from "./providerCard.module.css";
import SingleCard from "./SingleCard";

import bGamingLogo from "../../../../../../../../public/landingPage/mainSection/providers/BGaming.png";

import amusnetLogo from "../../../../../../../../public/landingPage/mainSection/providers/amusnet.svg";

import noLimitLogo from "../../../../../../../../public/landingPage/mainSection/providers/nolimit.svg";

import evolutionGamingLogo from "../../../../../../../../public/landingPage/mainSection/providers/evolutionGamming.svg";

import playngoLogo from "../../../../../../../../public/landingPage/mainSection/providers/playngo.svg";

import pragmaticplayLogo from "../../../../../../../../public/landingPage/mainSection/providers/pragmaticplay.svg";

import yggdrasilLogo from "../../../../../../../../public/landingPage/mainSection/providers/yggdrasil.svg";

const data = [
  { title: "Evolution Gaming", logo: evolutionGamingLogo },
  { title: "Pragmatic Play", logo: pragmaticplayLogo },
  { title: "Play’n GO", logo: playngoLogo },
  { title: "No Limit City", logo: noLimitLogo },
  { title: "YGGDRASIL", logo: yggdrasilLogo },
  { title: "Amusnet", logo: amusnetLogo },
  { title: "BGAMING", logo: bGamingLogo },
];
const ProviderCards = () => {
  return (
    <Grid
      container
      justifyContent={"space-between"}
      className={classes.providerCardContainer}
    >
      {data.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} md={1.6}>
          <SingleCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProviderCards;
