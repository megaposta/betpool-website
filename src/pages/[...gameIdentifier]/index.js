// export const runtime = "experimental-edge";
import { Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Providers from "../../../components/landingPage/components/mainSection/components/providers";
import { DataContext } from "../../../context/DataContext";
import {
  GET_ALLOWED_DESKTOP_GAMES,
  GET_GAMES_PROVIDERS,
  basrUrl,
} from "@/endpoints";
import { useRouter } from "next/router";
import TranslationData from "../../../public/locales/translation.json";

const GamePage = ({ serverData, gamesProvider }) => {
  const { setProviders } = useContext(DataContext);

  useEffect(() => {
    setProviders(gamesProvider);
  }, [gamesProvider]);

  const router = useRouter();
  const [selectedGame, setSelectedGame] = useState();

  const valueToFind = router.asPath.slice(1);

  useEffect(() => {
    setSelectedGame(serverData[valueToFind]);
  }, [valueToFind]);

  if (!selectedGame) {
    return <p>Loading...</p>;
  }

  return (
    <Stack spacing={2} sx={{ flex: 1 }}>
      <Stack
        sx={{
          height: "90vh",
          borderRadius: "18.312px",
          border: "1.145px solid  #F2F1F1",
          backgroundColor: "#FEFDFE",
        }}
      >
        <iframe
          src={`${basrUrl}/${selectedGame.demo}`}
          width="100%"
          height="100%"
          style={{
            borderTopLeftRadius: "18.312px",
            borderTopRightRadius: "18.312px",
          }}
        ></iframe>

        <Stack sx={{ padding: "1rem" }}>
          <Typography
            sx={{
              color: " #1F2947",
              fontFamily: "Instrument Sans",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "28px",
            }}
          >
            {selectedGame.title}
          </Typography>
          <Typography
            sx={{
              color: " #1F2947",
              fontFamily: "Instrument Sans",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            {selectedGame.provider}
          </Typography>
        </Stack>
      </Stack>
      <Providers />
    </Stack>
  );
};

export default GamePage;

export const getServerSideProps = async ({ locale }) => {
  const response = await fetch(GET_ALLOWED_DESKTOP_GAMES);
  const data = await response.json();

  const responseProviders = await fetch(GET_GAMES_PROVIDERS);
  const providersData = await responseProviders.json();

  return {
    props: {
      messages: TranslationData[locale],
      serverData: data,
      gamesProvider: providersData,
    },
  };
};
