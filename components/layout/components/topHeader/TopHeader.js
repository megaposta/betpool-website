import React from "react";
import Link from "next/link";
import classes from "./mainHeader.module.css";
import { Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import Logo from "../../../../public/betpool_logo_2.png";
import { useTranslation } from "react-i18next";

const TopHeader = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const mediaQuery375 = useMediaQuery(theme.breakpoints.down("375"));
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      className={classes.mainHeader}
    >
      <Link href={"/"}>
        <Image
          src={Logo}
          alt="Betpool Logo"
          width={"auto"}
          height={"auto"}
          className={classes.logo}
        />
      </Link>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={mediaQuery375 ? 0 : 2}
      >
        <Button className={classes.loginButton}>
          {t("TopHeader.loginButton")}
        </Button>
        <Button className={classes.registerButton}>
          {t("TopHeader.registerButton")}
        </Button>
      </Stack>
    </Stack>
  );
};

export default TopHeader;
