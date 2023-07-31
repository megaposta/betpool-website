import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import footerLogo from "../../../../../../public/logo-white-bg.svg";
import twitterIcon from "../../../../../../public/social-icons/twitter.svg";
import instaIcon from "../../../../../../public/social-icons/insta.svg";
import Link from "next/link";
import classes from "./footerTopMenu.module.css";

const FooterTopMenu = () => {
  const theme = useTheme();
  const mediaQuery550 = useMediaQuery(theme.breakpoints.down("550"));
  const mediaQuery522 = useMediaQuery(theme.breakpoints.down("522"));
  const mediaQuery769 = useMediaQuery(theme.breakpoints.down("769"));
  return (
    <Stack
      direction={"row"}
      alignItems={mediaQuery550 ? "center" : "flex-start"}
      flexWrap={"wrap"}
    >
      <Stack spacing={3} direction={mediaQuery550 ? "row" : "column"}>
        <Image src={footerLogo} alt="betpool logo" width={120} height={20} />
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={mediaQuery522 ? "center" : "flex-start"}
          spacing={3}
        >
          <Link href={"https://twitter.com/"}>
            <Image
              src={twitterIcon}
              alt="twitter logo"
              width={24}
              height={24}
            />
          </Link>
          <Link href={"https://instagram.com"}>
            <Image
              src={instaIcon}
              alt="instagram logo"
              width={24}
              height={24}
            />
          </Link>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"flex-start"}
        spacing={10}
        className={classes.mAuto}
        sx={{ display: mediaQuery769 ? "none" : "flex" }}
      >
        {/* HelpFul Links */}
        <Stack spacing={2}>
          <Typography className={classes.footerTopMenuHeader} variant="p">
            HELPFUL LINKS
          </Typography>
          <Link href={"/"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              Crash
            </Typography>
          </Link>
          <Link href={"/"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              Double
            </Typography>
          </Link>
          <Link href={"/"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              VIP Club
            </Typography>
          </Link>

          <Link href={"/"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              Payment Methods
            </Typography>
          </Link>

          <Link href={"/"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              Fairness
            </Typography>
          </Link>

          <Link href={"/"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              Carinaro Bet
            </Typography>
          </Link>
        </Stack>
        {/* About Us  */}
        <Stack spacing={2}>
          <Typography className={classes.footerTopMenuHeader} variant="p">
            ABOUT US
          </Typography>

          <Link
            href={"/terms-of-service"}
            className={classes.footerTopMenuLinkStyle}
          >
            <Typography className={classes.footerTopMenuLink} variant="p">
              Terms of Service
            </Typography>
          </Link>

          <Link
            href={"/privacy-policy"}
            className={classes.footerTopMenuLinkStyle}
          >
            <Typography className={classes.footerTopMenuLink} variant="p">
              Privacy Policy
            </Typography>
          </Link>

          <Link href={"/kyc-policy"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              KYC Policy
            </Typography>
          </Link>

          <Link href={"/aml-policy"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              AML Policy
            </Typography>
          </Link>

          <Link href={"/"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              Bonus Terms
            </Typography>
          </Link>

          <Link href={"/"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              Welcome Bonus
            </Typography>
          </Link>
          <Link
            href={"/responsible-gambling"}
            className={classes.footerTopMenuLinkStyle}
          >
            <Typography className={classes.footerTopMenuLink} variant="p">
              Responsible Gambling
            </Typography>
          </Link>

          <Link href={"/"} className={classes.footerTopMenuLinkStyle}>
            <Typography className={classes.footerTopMenuLink} variant="p">
              FAQ
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterTopMenu;
