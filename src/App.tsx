import { ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 0,
    },
    fontFamily: "xxxxxx",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app"></div>
    </ThemeProvider>
  );
}

export default App;
