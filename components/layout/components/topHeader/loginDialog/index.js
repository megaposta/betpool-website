import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import loginLogo from "../../../../../public/loginLogo.svg";
import textLogo from "../../../../../public/BETPOOL.svg";
import classes from "./loginForm.module.css";

const LoginDialog = ({ buttonClass, t }) => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    // Handle login logic here
    console.log(values);
    handleCloseLoginDialog(); // Close the dialog after submission
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <Button className={buttonClass} onClick={() => setOpenLoginDialog(true)}>
        {t("TopHeader.loginButton")}
      </Button>
      <Dialog
        open={openLoginDialog}
        onClose={handleCloseLoginDialog}
        sx={{
          borderRadius: "16px",
          border: "1px solid  #D7D7D7",
          "& .MuiPaper-root": {
            padding: "3rem",
          },
        }}
        maxWidth="sm"
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ padding: "0" }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ padding: "0" }}
          >
            <Image src={loginLogo} alt="Logo" width={40} height={40} />
            <Image src={textLogo} alt="Logo" width={120} height={20} />
          </Stack>

          <DialogTitle
            sx={{
              color: "#1F2947",
              fontFamily: "Instrument Sans",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "32px",
            }}
          >
            Sign in to your account
          </DialogTitle>
        </Stack>
        <DialogContent sx={{ padding: "0" }}>
          <form onSubmit={formik.handleSubmit} className={classes.loginForm}>
            <TextField
              margin="normal"
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LoginDialog;
