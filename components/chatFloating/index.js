import React from "react";
import Image from "next/image";
import chatIcon from "../../public/landingPage/mainSection/topNavigation/open-chat-icon.png";
import { Box, useMediaQuery, useTheme } from "@mui/material";

const ChatFloatingIcon = () => {
  const theme = useTheme();
  const mediaQuery769 = useMediaQuery(theme.breakpoints.down("769"));

  const handleClick = () => {
    // Handle click event for opening chat
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
        cursor: "pointer",
        display: mediaQuery769 ? "none" : "block",
      }}
    >
      <Image src={chatIcon} alt="chat icon" width={48} height={48} />
    </Box>
  );
};

export default ChatFloatingIcon;
