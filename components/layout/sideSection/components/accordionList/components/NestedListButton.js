import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import classes from "../accordionList.module.css";
import List from "@mui/material/List";

const NestedListButton = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton
        onClick={handleClick}
        className={`${classes.buttonRoundedStyle} ${
          open ? classes.opened : ""
        }`}
      >
        <ListItemText
          className={`${classes.title}  ${open ? classes.openedTitle : ""}`}
          primary={data.title}
        />
        {open ? (
          <ExpandLess
            className={`${classes.expandLessIcon} ${
              open ? classes.openedIcon : ""
            }`}
          />
        ) : (
          <ExpandMore
            className={`${classes.expandMoreIcon} ${
              open ? classes.openedIcon : ""
            }`}
          />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data.nestedOption.map((item) => (
            <ListItemButton
              key={item.id}
              className={`${classes.buttonRoundedStyle}  ${classes.nestedButtonRoundedStyle}`}
              sx={{ pl: 4 }}
            >
              <ListItemText className={classes.title} primary={item.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default NestedListButton;
