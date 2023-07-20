import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import providersIcon from "../../../../../../public/landingPage/mainSection/providers/providers.svg";
import classes from "./providers.module.css";
import ProviderCards from "./components/providerCard";

const Providers = () => {
  return (
    <Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className={classes.providersHeader}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Image
            src={providersIcon}
            alt="providers icon"
            width={24}
            height={24}
          />
          <Typography variant="p" className={classes.providersTitle}>
            Providers
          </Typography>
        </Stack>
        <Button className={classes.viewAllBtn}>View All</Button>
      </Stack>
      <ProviderCards />
    </Stack>
  );
};

export default Providers;
