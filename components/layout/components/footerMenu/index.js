import { Box, Container, Divider } from "@mui/material";
import React from "react";
import classes from "./footerMenu.module.css";
import FooterTopMenu from "./components/footerTopMenu";
import PaymentMethods from "./components/paymentMethods";
import SiteDescription from "./components/siteDescription";
import CopyRightsAndLang from "./components/copyrights&lang";
import FooterBottom from "./components/footerBottom";

const FooterMenu = () => {
  return (
    <Box className={classes.footerContainer}>
      <Container maxWidth="md">
        <FooterTopMenu />
        <Divider sx={{ margin: "3rem 0" }} />
        <PaymentMethods />
        <Divider sx={{ margin: "3rem 0" }} />
        <SiteDescription />
        <Divider sx={{ margin: "3rem 0" }} />
        <CopyRightsAndLang />
        <FooterBottom />
      </Container>
    </Box>
  );
};

export default FooterMenu;
