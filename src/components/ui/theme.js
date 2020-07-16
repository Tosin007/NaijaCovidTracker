import { createMuiTheme } from "@material-ui/core/styles";

const barelyGreen = "#acb7ae";
const brownShirt = "#82716e";
const tanBlonde = "#e4decd";
const blondey = "#c2b490";
const greySilver = "#bccbde";
const yellowBrite = "#cdd422";

export default createMuiTheme({
  palette: {
    common: {
      barelyGreen: `${barelyGreen}`,
      brownShirt: `${brownShirt}`,
      tanBlonde: `${tanBlonde}`,
      blondey: `${blondey}`,
      greySilver: `${greySilver}`,
      yellowBrite: `${yellowBrite}`,
    },
    primary: {
      main: barelyGreen,
    },
    secondary: {
      main: tanBlonde,
    },
    error: {
      main: brownShirt,
    },
    warning: {
      main: blondey,
    },
    success: {
      main: greySilver,
    },
    info: {
      main: yellowBrite,
    },
  },
});
