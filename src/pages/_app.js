import "@/styles/globals.css";
import Head from "next/head";
import { Box } from "@mui/material";
import Layout from "../../components/layout/Layout";
import ChatFloatingIcon from "../../components/chatFloating";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Box sx={{ backgroundColor: "#F3F3F3", padding: "1rem 0 0 0" }}>
        <Layout>
          <ChatFloatingIcon />
          <Head>
            <title>betPool</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </I18nextProvider>
  );
}

export default App;
