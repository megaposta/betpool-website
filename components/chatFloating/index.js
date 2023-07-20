import React from "react";
import Fab from "@mui/material/Fab";
import Image from "next/image";
import chatIcon from "../../public/landingPage/mainSection/topNavigation/open-chat-icon.png";
import { Box } from "@mui/material";

const ChatFloatingIcon = () => {
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
      }}
    >
      <Image src={chatIcon} alt="chat icon" width={48} height={48} />
    </Box>
  );
};

export default ChatFloatingIcon;
