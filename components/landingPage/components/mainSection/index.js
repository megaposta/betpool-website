import { Grid, Stack, useMediaQuery, useTheme } from "@mui/material";
import React, { useContext, useRef } from "react";
import classes from "./mainSection.module.css";
import HeaderImages from "./components/headerImages";
import TopNavigation from "./components/topNavigation";
import Banners from "./components/banners";
import Providers from "./components/providers";
import PropTypes from "prop-types";
import { DataContext } from "../../../../context/DataContext";
import GameCard from "../../../gameCard";
import Link from "next/link";

import liveCasino from "../../../../public/landingPage/mainSection/banners/live-casino.png";
import slotGames from "../../../../public/landingPage/mainSection/banners/slot-games.png";
import sportsBetting from "../../../../public/landingPage/mainSection/banners/sports-betting.png";
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

  const targetElementRef = useRef(null);

  const handleScrollButtonClick = () => {
    // Check if the ref exists and if the element is ready
    if (targetElementRef.current) {
      // Scroll the element into view
      targetElementRef.current.scrollIntoView({
        behavior: "smooth", // Use 'auto' for instant scroll without animation
        block: "start", // 'start', 'center', 'end', or 'nearest'
      });
    }
  };

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
      <HeaderImages
        handleChange={setValue}
        handleScrollButtonClick={handleScrollButtonClick}
      />
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
        <Banners
          liveCasino={liveCasino}
          slotGames={slotGames}
          sportsBetting={sportsBetting}
          handleChange={setValue}
          handleScrollButtonClick={handleScrollButtonClick}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Banners
          liveCasino={liveCasino}
          slotGames={slotGames}
          sportsBetting={sportsBetting}
          handleChange={setValue}
          handleScrollButtonClick={handleScrollButtonClick}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <Banners
          liveCasino={liveCasino}
          slotGames={slotGames}
          sportsBetting={sportsBetting}
          handleChange={setValue}
          handleScrollButtonClick={handleScrollButtonClick}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <div className={classes.providerCardContainer}>
          <Grid container spacing={2} id="targetElement" ref={targetElementRef}>
            {allowedGames &&
              Object.keys(allowedGames).map((key) => (
                <Grid item xs={6} sm={4} md={3} lg={1.71} key={key}>
                  <Link href={`/${key}`}>
                    <GameCard item={allowedGames[key]} identifier={key} />
                  </Link>
                </Grid>
              ))}
          </Grid>
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <Banners
          liveCasino={liveCasino}
          slotGames={slotGames}
          sportsBetting={sportsBetting}
          handleChange={setValue}
          handleScrollButtonClick={handleScrollButtonClick}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={5}>
        <Banners
          liveCasino={liveCasino}
          slotGames={slotGames}
          sportsBetting={sportsBetting}
          handleChange={setValue}
          handleScrollButtonClick={handleScrollButtonClick}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={6}>
        <Banners
          liveCasino={liveCasino}
          slotGames={slotGames}
          sportsBetting={sportsBetting}
          handleChange={setValue}
          handleScrollButtonClick={handleScrollButtonClick}
        />
      </CustomTabPanel>

      <Providers
        handleChange={setValue}
        handleScrollButtonClick={handleScrollButtonClick}
      />
    </Stack>
  );
};

export default MainSection;
