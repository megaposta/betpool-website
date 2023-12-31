import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";
import classes from "../../footerMenu.module.css";
import Image from "next/image";
import enFlag from "../../../../../../public/flags/en.svg";
import brFlag from "../../../../../../public/flags/br.svg";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

const CopyRightsAndLang = () => {
  const theme = useTheme();
  const mediaQuery400 = useMediaQuery(theme.breakpoints.down("400"));
  const mediaQuery550 = useMediaQuery(theme.breakpoints.down("550"));
  const t = useTranslations();
  const router = useRouter();
  const [value, setValue] = useState(router.locale);
  const langs = [
    {
      value: t("English"),
      label: t("English"),
      code: "en",
      flag: enFlag,
    },
    {
      value: t("Brazilian"),
      label: t("Brazilian"),
      code: "pt-br",
      flag: brFlag,
    },
  ];
  const changeLanguage = (lang) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return (
    <Stack
      direction={mediaQuery400 ? "column" : "row"}
      alignItems={mediaQuery400 ? "flex-start" : "center"}
      justifyContent={"space-between"}
      spacing={mediaQuery400 ? 2 : 0}
      sx={{ paddingBottom: mediaQuery550 ? "4rem" : 0 }}
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
          value={value}
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
                {value === "en" ? t("English") : t("Brazilian")}
              </Box>
            );
          }}
          onChange={(e) => {
            setValue(e.target.value);
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
