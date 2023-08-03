import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { basrUrl } from "@/endpoints";
import { Stack, Typography } from "@mui/material";

const GameDialog = ({ open, handleClose, item }) => {
  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ padding: "0.2rem 2rem" }}
      >
        <Typography variant="h4">{item.title}</Typography>
        <Button variant="contained" onClick={handleClose}>
          X
        </Button>
      </Stack>
      <DialogContent sx={{ padding: 0 }}>
        <iframe
          src={`${basrUrl}${item.demo}`}
          width="100%"
          height="100%"
        ></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default GameDialog;
