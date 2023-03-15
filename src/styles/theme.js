import { createTheme } from "@mui/material/styles";
import { green, grey, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: green[500],
    },
    secondary: {
      main: grey[500],
    },
    error: {
      main: red[500],
    },
  },
});

export default theme;
