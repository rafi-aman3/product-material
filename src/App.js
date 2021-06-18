import { makeStyles, Paper, ThemeProvider, useTheme } from "@material-ui/core";
import { useSelector } from "react-redux";
import Products from "./components/Products";
import { createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrderTable from "./components/Order/OrderTable";




const useStyles = makeStyles({
  title: {
    fontStyle: 'oblique'
  }
})


function App() {

  const mode = useSelector(state => state.mode.value);
  const modeType = mode ? "dark" : "light";
  const theme = createMuiTheme({
    palette: {
      type: modeType,
      primary: {
        main: "#264653",
      },
      secondary: {
        main: "#2a9d8f",
      },
    },
    typography: {
      fontFamily: "'Brygada 1918', serif",
      fontWeightRegular: 400,
      fontWeightBold: 700,
    }
  });

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Paper>
            <Route exact path="/">
              <Products />
            </Route>
            <Route path="/order">
              <OrderTable />
            </Route>
          </Paper>
        </Switch>
      </Router>
    </ThemeProvider>

  );
}

export default App;
