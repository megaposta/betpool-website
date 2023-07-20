import { Grid, Stack } from "@mui/material";
import React from "react";
import SideSection from "./components/sideSection";
import MainSection from "./components/mainSection";
// import classes from "./landingPage.module.css";
const LandingPage = () => {
  return (
    <MainSection />
    // <Grid container spacing={2}>
    //   <Grid item xs={2}>
    //     <SideSection />
    //   </Grid>
    //   <Grid item xs={10}>
    //     <MainSection />
    //   </Grid>
    // </Grid>
  );
};

export default LandingPage;
