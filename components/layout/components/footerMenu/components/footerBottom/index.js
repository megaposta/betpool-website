import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import classes from "../../footerMenu.module.css";
const FooterBottom = () => {
  const theme = useTheme();
  const mediaQuery460 = useMediaQuery(theme.breakpoints.down("460"));
  const mediaQuery550 = useMediaQuery(theme.breakpoints.down("550"));
  return (
    <Stack
      marginTop={5}
      direction={mediaQuery460 ? "column" : "row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={mediaQuery460 ? 0.5 : 2}
      sx={{ display: mediaQuery550 ? "none" : "flex" }}
    >
      <Typography variant="p" className={classes.sofiaProFont}>
        Support support@betpool.com
      </Typography>
      <Typography
        variant="p"
        className={classes.sofiaProFont}
        // sx={{ display: mediaQuery460 ? "none" : "block" }}
      >
        {mediaQuery460 ? "ــ" : "|"}
      </Typography>
      <Typography variant="p" className={classes.sofiaProFont}>
        Partners partners@betpool.com
      </Typography>
      <Typography
        variant="p"
        className={classes.sofiaProFont}
        // sx={{ display: mediaQuery460 ? "none" : "block" }}
      >
        {mediaQuery460 ? "ــ" : "|"}
      </Typography>

      <Typography variant="p" className={classes.sofiaProFont}>
        Legal legal@betpool.com
      </Typography>
    </Stack>
  );
};

export default FooterBottom;
