import "@/styles/globals.css";
import Head from "next/head";
import { Box } from "@mui/material";
import Layout from "../../components/layout/Layout";
import ChatFloatingIcon from "../../components/chatFloating";
import MobileBottomNavigation from "../../components/layout/components/mobileBottomNavigation";
import { useState } from "react";
import DataContextProvider from "../../context/DataContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n"; // Adjust the path accordingly

function App({ Component, pageProps }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <DataContextProvider>
        <Box sx={{ backgroundColor: "#F3F3F3", padding: "1rem 0 0 0" }}>
          <Layout drawerOpen={drawerOpen} handleDrawerClose={handleDrawerClose}>
            <ChatFloatingIcon />
            <Head>
              <title>betPool</title>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
            </Head>
            <Component {...pageProps} />
            <MobileBottomNavigation handleDrawerOpen={handleDrawerOpen} />
          </Layout>
        </Box>
      </DataContextProvider>
    </I18nextProvider>
  );
}

export default App;
