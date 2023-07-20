import React, { Fragment } from "react";
import { Container, Grid } from "@mui/material";
import TopHeader from "./components/topHeader/TopHeader";
import FooterMenu from "./components/footerMenu";
import SideSection from "../landingPage/components/sideSection";

const Layout = (props) => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <TopHeader />

        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideSection />
          </Grid>

          <Grid item xs={10}>
            {props.children}
          </Grid>
        </Grid>
      </Container>
      <FooterMenu />
    </Fragment>
  );
};

export default Layout;
