import { ThemeProvider } from "@mui/material";
import { type AppType } from "next/dist/shared/lib/utils";
import theme from "../styles/theme";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
