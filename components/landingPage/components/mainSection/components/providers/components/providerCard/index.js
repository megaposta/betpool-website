import React from "react";
import classes from "./providerCard.module.css";
import SingleCard from "./SingleCard";

import bGamingLogo from "../../../../../../../../public/landingPage/mainSection/providers/BGaming.png";

import amusnetLogo from "../../../../../../../../public/landingPage/mainSection/providers/amusnet.svg";

import noLimitLogo from "../../../../../../../../public/landingPage/mainSection/providers/nolimit.svg";

import evolutionGamingLogo from "../../../../../../../../public/landingPage/mainSection/providers/evolutionGamming.svg";

import playngoLogo from "../../../../../../../../public/landingPage/mainSection/providers/playngo.svg";

import pragmaticplayLogo from "../../../../../../../../public/landingPage/mainSection/providers/pragmaticplay.svg";

import yggdrasilLogo from "../../../../../../../../public/landingPage/mainSection/providers/yggdrasil.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={classes.providerCardContainer}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className={classes.cardContainer}>
            <SingleCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProviderCards;

{
  /* <Grid
container
justifyContent={"space-between"}
className={classes.providerCardContainer}
gap={mediaQuery769 ? 2 : 0}
>
{data.map((item, index) => (
  <Grid key={index} item xs={12} sm={2.7} md={1.6}>
    <SingleCard item={item} />
  </Grid>
))}
</Grid> */
}
