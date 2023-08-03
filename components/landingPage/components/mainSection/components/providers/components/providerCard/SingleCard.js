import React from "react";

import Card from "@mui/material/Card";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import classes from "./singleCard.module.css";
import { providerLogo } from "@/endpoints";

const SingleCard = ({ item }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
      }}
    >
      <Box className={classes.cardLogo}>
        <Image
          src={providerLogo(item.id)}
          alt={item.title}
          width={70}
          height={30}
        />
      </Box>
      <Stack justifyContent={"space-around"} className={classes.cardContent}>
        {item.title}
        <Typography variant="caption">{item.games_count}</Typography>
      </Stack>
    </Card>
  );
};

export default SingleCard;
