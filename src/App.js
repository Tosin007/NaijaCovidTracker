import React from "react";
import Navbar from "./components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./components/ui/theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Chart from "./components/Chart";

import StateDisplay from "./components/StateDisplay";
import createPalette from "@material-ui/core/styles/createPalette";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
    padding: "0",
    height: "auto",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={StateDisplay} />
            <Route path="/chart" component={Chart} />
          </Switch>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
