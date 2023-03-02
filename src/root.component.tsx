import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import HomeBar from "./components/AppBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#001e3c",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

export default function Root(props) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomeBar />
        <App />
      </ThemeProvider>
    </>
  );
}
