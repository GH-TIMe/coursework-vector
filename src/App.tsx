import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  Models,
  Wishes,
  PowerBI,
  ViewTable,
  EditTable,
  Purchase,
  Production,
  Launch,
} from "./pages";
import { CustomizedSteppers } from "./components";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
// import { ruRU } from "@material-ui/core/locale";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "rgb(161, 52, 60)",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CustomizedSteppers />
      <Switch>
        <Route exact path="/" component={Models} />
        <Route exact path="/power_bi" component={PowerBI} />
        <Route exact path="/:id/schemes" component={ViewTable} />
        <Route exact path="/:id/wishes" component={Wishes} />
        <Route exact path="/:id/schemes/:id2/purchase" component={Purchase} />
        <Route
          exact
          path="/:id/schemes/:id2/production"
          component={Production}
        />
        <Route exact path="/:id/schemes/:id2/launch" component={Launch} />
        <Route exact path="/:id/schemes/:id2/wishes" component={EditTable} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
