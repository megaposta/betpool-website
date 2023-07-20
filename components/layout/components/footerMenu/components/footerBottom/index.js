import { Stack, Typography } from "@mui/material";
import React from "react";
import classes from "../../footerMenu.module.css";
const FooterBottom = () => {
  return (
    <Stack
      marginTop={5}
      direction={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
    >
      <Typography variant="p" className={classes.sofiaProFont}>
        Support support@betpool.com
      </Typography>
      <Typography variant="p" className={classes.sofiaProFont}>
        |
      </Typography>
      <Typography variant="p" className={classes.sofiaProFont}>
        Partners partners@betpool.com
      </Typography>
      <Typography variant="p" className={classes.sofiaProFont}>
        |
      </Typography>

      <Typography variant="p" className={classes.sofiaProFont}>
        Legal legal@betpool.com
      </Typography>
    </Stack>
  );
};

export default FooterBottom;
