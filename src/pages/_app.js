import "@/styles/globals.css";
import Head from "next/head";
import { Box } from "@mui/material";
import Layout from "../../components/layout/Layout";
import ChatFloatingIcon from "../../components/chatFloating";
import MobileBottomNavigation from "../../components/layout/components/mobileBottomNavigation";
import { useState } from "react";
import DataContextProvider from "../../context/DataContext";
import { NextIntlProvider } from "next-intl";

function App({ Component, pageProps }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <NextIntlProvider messages={pageProps.messages}>
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
    </NextIntlProvider>
  );
}

export default App;
