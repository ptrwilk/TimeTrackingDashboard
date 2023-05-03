import { ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";
import TimeTrackingDashboard from "./Pages/TimeTrackingDashboard";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 18,
    },
    fontFamily: "Rubik",
  },
  components: {
    MuiList: {
      defaultProps: {
        disablePadding: true,
      },
    },
    MuiListItem: {
      defaultProps: {
        // disablePadding: true,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <TimeTrackingDashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;
