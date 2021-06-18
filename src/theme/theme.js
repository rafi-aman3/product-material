import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
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
  // palette:{
  //   type: "dark"
  // }
});

export default theme;