import { Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

import visa from "../../../../../../public/footer-icons/visa.png";
import indir2 from "../../../../../../public/footer-icons/indir-2.png";
import skrill from "../../../../../../public/footer-icons/skrill.png";
import neteller from "../../../../../../public/footer-icons/neteller.png";
import beGambleAware from "../../../../../../public/footer-icons/beGambleAware.png";
import plus18 from "../../../../../../public/footer-icons/plus18.png";
import gamcare from "../../../../../../public/footer-icons/gamcare.png";
import online from "../../../../../../public/footer-icons/online.png";
import eTransfer from "../../../../../../public/footer-icons/eTransfer.png";

const PaymentMethods = () => {
  const theme = useTheme();
  const mediaQuery769 = useMediaQuery(theme.breakpoints.down("769"));
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      spacing={mediaQuery769 ? 2 : 0}
      rowGap={mediaQuery769 ? 2 : 0}
    >
      <Image
        src={visa}
        alt={"visa"}
        width={37}
        height={12}
        style={{ mixBlendMode: "exclusion" }}
      />

      <Image
        src={indir2}
        alt={"indir2"}
        width={31}
        height={19}
        style={{ mixBlendMode: "exclusion" }}
      />

      <Image
        src={skrill}
        alt={"skrill"}
        width={47}
        height={16}
        style={{ mixBlendMode: "exclusion" }}
      />

      <Image
        src={neteller}
        alt={"neteller"}
        width={66}
        height={12}
        style={{ mixBlendMode: "exclusion" }}
      />

      <Image
        src={beGambleAware}
        alt={"Be Aamble Aware"}
        width={185}
        height={24}
        style={{ mixBlendMode: "exclusion" }}
      />

      <Image
        src={plus18}
        alt={"plus 18"}
        width={42}
        height={42}
        style={{ mixBlendMode: "exclusion" }}
      />

      <Image src={gamcare} alt={"gamcare"} width={51} height={52} />

      <Image src={online} alt={"online"} width={43} height={58} />

      <Image src={eTransfer} alt={"online"} width={43} height={58} />
    </Stack>
  );
};

export default PaymentMethods;
