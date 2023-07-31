import React from "react";
import {
  Container,
  Grid,
  ThemeProvider,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import TopHeader from "./components/topHeader/TopHeader";
import FooterMenu from "./components/footerMenu";
import SideSection from "./sideSection";
import LeftSideDrawer from "./sideSection/components/leftDrawer";

// Define custom breakpoints
const customBreakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
    custom1: 769, // Define an additional custom breakpoint
    custom2: 800, // Define an additional custom breakpoint
  },
};

// Create a custom theme with the custom breakpoints
const theme = createTheme({
  breakpoints: customBreakpoints,
});

const Layout = (props) => {
  const mediaQuery769 = useMediaQuery(theme.breakpoints.down("769"));

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <TopHeader />

        <Grid container spacing={2}>
          <Grid
            item
            xs={0}
            sm={0}
            custom1={3}
            lg={2}
            sx={{
              "&.MuiGrid-item": {
                paddingLeft: mediaQuery769 ? 0 : "1rem",
              },
            }}
          >
            <SideSection
              customSx={{
                display: mediaQuery769 ? "none" : "block",
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            custom1={9}
            lg={10}
            sx={{ display: "flex" }}
          >
            {props.children}
          </Grid>
        </Grid>
      </Container>
      <FooterMenu />
      <LeftSideDrawer
        open={props.drawerOpen}
        onClose={props.handleDrawerClose}
      />
    </ThemeProvider>
  );
};

export default Layout;
