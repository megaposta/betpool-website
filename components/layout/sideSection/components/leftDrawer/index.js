import React from "react";
import Drawer from "@mui/material/Drawer";
import SideSection from "../..";
import { useMediaQuery, useTheme } from "@mui/material";

const LeftSideDrawer = ({ open, onClose }) => {
  const theme = useTheme();
  const mediaQuery769 = useMediaQuery(theme.breakpoints.down("769"));

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <SideSection
        customSx={{
          display: mediaQuery769 ? "block" : " none",
          width: "250px",
        }}
      />
    </Drawer>
  );
};

export default LeftSideDrawer;
