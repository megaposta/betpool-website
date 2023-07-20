import React from "react";
import Link from "next/link";
import classes from "./mainHeader.module.css";
import { Button, Stack } from "@mui/material";
import Image from "next/image";
import Logo from "../../../../public/betpool_logo_2.png";
import { useTranslation } from "react-i18next";
const TopHeader = () => {
  const { t } = useTranslation();
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
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <Button className={classes.loginButton}>{t("login")}</Button>
        <Button className={classes.registerButton}>Register</Button>
      </Stack>
    </Stack>
  );
};

export default TopHeader;
