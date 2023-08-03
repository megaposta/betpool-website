import { Box, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Providers from "../../components/landingPage/components/mainSection/components/providers";
import { DataContext } from "../../context/DataContext";
import {
  GET_ALLOWED_DESKTOP_GAMES,
  GET_GAMES_COLLECTIONS,
  GET_GAMES_PROVIDERS,
  basrUrl,
} from "@/endpoints";
import { useRouter } from "next/router";

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

  console.log("selectedGame", selectedGame);
  return (
    <Stack spacing={2} sx={{ flex: 1 }}>
      <Stack
        sx={{
          height: "90vh",

          borderRadius: "18.312px",
          border: "1.145px solid  #F2F1F1",
          background: "#FEFDFE",
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
              lineHeight: "28px" /* 155.556% */,
            }}
          >
            {selectedGame.title}
          </Typography>
        </Stack>
      </Stack>
      <Providers />
    </Stack>
  );
};

export default GamePage;

export async function getServerSideProps() {
  // Fetch data from an API or any other source
  const response = await fetch(GET_ALLOWED_DESKTOP_GAMES);
  const data = await response.json();

  const responseProviders = await fetch(GET_GAMES_PROVIDERS);
  const providersData = await responseProviders.json();

  // Return the data as props
  return {
    props: {
      serverData: data,
      gamesProvider: providersData,
    },
  };
}
