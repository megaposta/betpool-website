import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import classes from "../accordionList.module.css";

const ListButton = ({ data }) => {
  return (
    <ListItemButton className={classes.buttonRoundedStyle}>
      <ListItemText className={classes.title} primary={data.title} />
    </ListItemButton>
  );
};

export default ListButton;
