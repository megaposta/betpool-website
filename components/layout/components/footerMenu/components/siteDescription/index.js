import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import gameingCuracao from "../../../../../../public/footer-icons/gamingCuracao.png";
import classes from "../../footerMenu.module.css";
const SiteDescription = () => {
  const theme = useTheme();
  const mediaQuery425 = useMediaQuery(theme.breakpoints.down("425"));
  return (
    <Stack direction={mediaQuery425 ? "column" : "row"} spacing={4}>
      <Image
        src={gameingCuracao}
        alt="Gameing Curacao"
        width={104}
        height={34}
        style={{
          mixBlendMode: "difference",
        }}
      />
      <Stack spacing={2}>
        <Typography variant="p" className={classes.sofiaProFont}>
          Betpool.com is operated by Prolific Trade N.V., company registration
          number 150731, with registered address at Groot Kwartierweg 10,
          Curaçao and is licensed and authorized by the Government of Curacao
          and operates under the Master License of Gaming Services Provider,
          N.V. #365/JAZ License Number: GLH-OCCHKTW0709172018. Payment agent
          company is Horangi Trading Limited with address Chytron, 30, 2nd
          floor, Flat/Office A22, 1075, Nicosia, Cyprus and Registration number:
          HE 411494.
        </Typography>

        <Typography variant="p" className={classes.sofiaProFont}>
          Gambling can be addictive. Please play responsibly. Betpool only
          accepts customers over 18 years of age.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default SiteDescription;
