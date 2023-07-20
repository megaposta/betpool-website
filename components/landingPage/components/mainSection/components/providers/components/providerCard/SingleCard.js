import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, CardHeader, Stack, Typography } from "@mui/material";
import Image from "next/image";
import classes from "./singleCard.module.css";

const SingleCard = ({ item }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
      }}
    >
      <Box className={classes.cardLogo}>
        <Image src={item.logo} alt={item.title} width={70} height={30} />
      </Box>
      <Stack justifyContent={"space-around"} className={classes.cardContent}>
        {item.title}
        <Typography variant="caption">249 Games</Typography>
      </Stack>
    </Card>
  );
};

export default SingleCard;
