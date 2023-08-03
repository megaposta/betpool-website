import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext } from "react";
import classes from "./mainSection.module.css";
import HeaderImages from "./components/headerImages";
import TopNavigation from "./components/topNavigation";
import Banners from "./components/banners";
import Providers from "./components/providers";
import PropTypes from "prop-types";
import { DataContext } from "../../../../context/DataContext";
import GameCard from "../../../gameCard";
import Link from "next/link";

// import { GET_ALL_DESKTOP_GAMES } from "@/constants/endpoints";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MainSection = () => {
  const { allowedGames } = useContext(DataContext);
  const theme = useTheme();
  const mediaQuery769 = useMediaQuery(theme.breakpoints.down("769"));
  const mediaQuery668 = useMediaQuery(theme.breakpoints.down("668"));
  const mediaQuery556 = useMediaQuery(theme.breakpoints.down("556"));
  const mediaQuery460 = useMediaQuery(theme.breakpoints.down("460"));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack
      className={classes.mainSection}
      spacing={2}
      sx={{
        flex: 1,
      }}
    >
      <HeaderImages />
      <TopNavigation
        value={value}
        handleChange={handleChange}
        a11yProps={a11yProps}
        mediaQuery460={mediaQuery460}
        mediaQuery556={mediaQuery556}
        mediaQuery668={mediaQuery668}
        mediaQuery769={mediaQuery769}
        customSx={{
          order: mediaQuery769 ? -1 : 0,
          margin: mediaQuery769 ? "0 0 1rem 0 !important" : "",
        }}
      />

      <CustomTabPanel value={value} index={0}>
        <Banners />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Banners />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Banners />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <div className={classes.providerCardContainer}>
          <Grid container spacing={2}>
            {allowedGames &&
              Object.keys(allowedGames).map((key) => (
                <Grid
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  lg={1.71}
                  key={key}
                  sx={{ flex: 1 }}
                >
                  <Link href={`/${key}`}>
                    <GameCard item={allowedGames[key]} identifier={key} />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <Banners />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={5}>
        <Banners />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={6}>
        <Banners />
      </CustomTabPanel>

      <Providers />
    </Stack>
  );
};

export default MainSection;
