import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React from "react";
import classes from "../../footerMenu.module.css";
import Image from "next/image";
import enFlag from "../../../../../../public/flags/en.svg";
import brFlag from "../../../../../../public/flags/br.svg";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const CopyRightsAndLang = () => {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const langs = [
    {
      value: t("english"),
      label: "English",
      code: "en",
      flag: enFlag,
    },
    {
      value: t("brazilian"),
      label: "Brazilian",
      code: "pt-BR",
      flag: brFlag,
    },
  ];
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Typography variant="p" className={classes.sofiaProFont}>
        © 2023 Betpool.com All rights reserved.
      </Typography>
      <Box>
        <Select
          sx={{
            width: 140,
            borderRadius: "9999px",
            backgroundColor: "#F3F3F3",
            padding: 0,
            border: 0,
            "&:focus": {
              boxShadow: "none",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          defaultValue="en"
          displayEmpty
          renderValue={(value) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "0.8rem",
                }}
              >
                <Image
                  src={value === "en" ? langs[0].flag : langs[1].flag}
                  alt={value}
                  width={25}
                  height={25}
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginRight: "0.5rem",
                  }}
                />
                {value === "en" ? "English" : "Brazilian"}
              </Box>
            );
          }}
          onChange={(e) => {
            changeLanguage(e.target.value);
          }}
        >
          {langs.map((option) => (
            <MenuItem key={option.value} value={option.code}>
              <Image
                src={option.flag}
                alt={option.value}
                width={15}
                height={15}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginRight: "0.5rem",
                }}
              />
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Stack>
  );
};

export default CopyRightsAndLang;
