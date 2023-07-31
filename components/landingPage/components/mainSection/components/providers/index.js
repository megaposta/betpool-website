import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import providersIcon from "../../../../../../public/landingPage/mainSection/providers/providers.svg";
import classes from "./providers.module.css";
import ProviderCards from "./components/providerCard";
import { useTranslation } from "next-i18next";

const Providers = () => {
  const { t } = useTranslation();

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
          <Typography
            variant="p"
            className={classes.providersTitle}
            suppressHydrationWarning
          >
            {t("HeaderNavigation.Providers")}
          </Typography>
        </Stack>
        <Button className={classes.viewAllBtn} suppressHydrationWarning>
          {t("HeaderNavigation.viewAll")}
        </Button>
      </Stack>
      <ProviderCards />
    </Stack>
  );
};

export default Providers;
