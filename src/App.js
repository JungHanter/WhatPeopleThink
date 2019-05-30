import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import {
  Home,
  Search
} from "./pages";

import {AppBar, CssBaseline, Toolbar, Typography, Button, IconButton, InputBase } from "@material-ui/core";
import {deepPurple, teal, lightBlue, deepOrange, lightGreen, amber, grey} from "@material-ui/core/colors";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import MyAppBar from './components/MyAppBar'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: grey[50],
      // paper: '#fff',
    },
    text: {
      // default: '#000',
      // paper: '#000',
      // primary: '#000',
      // secondary: grey[500]
    },
    primary: deepPurple,
    secondary: deepOrange,
    error: amber
  },
});

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
    },
  },
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <MyAppBar />

        <div className={classes.root}>
          <Route exact path="/" component={Home} /> {/* exact keyword for matching root(/) path */}
          <Route path="/search" component={Search} />
          {/*<Route path="/search" component={Search} />*/}
        </div>

        <div className="footer">
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
        </div>
      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
