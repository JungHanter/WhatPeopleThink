import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { Home, Search, Poll } from "./pages";

import { AppBar, CssBaseline, Toolbar, Typography, Button, IconButton, InputBase } from "@material-ui/core";
import { deepPurple, teal, lightBlue, deepOrange, lightGreen, amber, grey } from "@material-ui/core/colors";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import MyAppBar from './components/MyAppBar'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Noto Sans KR"',
      '"Noto Sans"',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
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
      // secondary: '#fff',
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
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      width: 960,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.up('lg')]: {
      width: 1280,
      marginLeft: 'auto',
        marginRight: 'auto',
    },
  },
}));

function App() {
  const styles = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <MyAppBar />

        <div className={styles.root}>
          <Route exact path="/" component={Home} /> {/* exact keyword for matching root(/) path */}
          <Route path="/search" component={Search} />
          <Route path="/poll" component={Poll} />
        </div>

      </React.Fragment>
    </MuiThemeProvider>
  );
}

export default App;
