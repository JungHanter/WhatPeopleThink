import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import useStyles from './MyAppBarStyles.js'

function MyAppBar() {
  const classes = useStyles();
  const [mobileMainAnchorEl, setMobileMainAnchorEl] = React.useState(null);
  const [mobileSubAnchorEl, setMobileSubAnchorEl] = React.useState(null);

  const isMobileMainMenuOpen = Boolean(mobileMainAnchorEl);
  const isMobileSubMenuOpen = Boolean(mobileSubAnchorEl);

  function handleMobileMainMenuOpen(event) {
    setMobileMainAnchorEl(event.currentTarget);
  }

  function handleMobileSubMenuOpen(event) {
    setMobileSubAnchorEl(event.currentTarget);
  }

  function handleMobileMainMenuClose() {
    setMobileMainAnchorEl(null);
  }

  function handleMobileSubMenuClose() {
    setMobileSubAnchorEl(null);
  }

  const renderMobileMainMenu = (
    <Menu
      anchorEl={mobileMainAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMobileMainMenuOpen}
      onClose={handleMobileMainMenuClose}
    >
      <MenuItem onClick={handleMobileMainMenuClose}>What People Think</MenuItem>
      <MenuItem onClick={handleMobileMainMenuClose}>Debate</MenuItem>
      <MenuItem onClick={handleMobileMainMenuClose}>Survey</MenuItem>
      <MenuItem onClick={handleMobileMainMenuClose}>WorldCup</MenuItem>
    </Menu>
  );

  const renderMobileSubMenu = (
    <Menu
      anchorEl={mobileSubAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileSubMenuOpen}
      onClose={handleMobileSubMenuClose}
    >
      <MenuItem>
        <AccountCircle />&nbsp;&nbsp;Profile
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>

          <Typography className={classes.title} variant="h6" noWrap>
            <Link href={'#'} className={classes.link} color="inherit" style={{ textDecoration: 'none' }}>
              What People Think
            </Link>
          </Typography>

          <div className={classes.sectionDesktopMainMenu}>
            <Button color="inherit">
              Debate
            </Button>

            <Button color="inherit">
              Survey
            </Button>

            <Button color="inherit">
              WorldCup
            </Button>
          </div>

          <div className={classes.sectionMobileMainMenu}>
            <IconButton
              edge="start"
              className={classes.mobileMainMenuButton}
              onClick={handleMobileMainMenuOpen}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
          </div>

          <div className={classes.grow} />

          <div className={classes.sectionSearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>

          {/*<div className={classes.grow} />*/}

          <div className={classes.sectionDesktopSubMenu}>
            <IconButton
              // edge="end"
              aria-owns={isMobileMainMenuOpen ? 'material-appbar' : undefined}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

          <div className={classes.sectionMobileSubMenu}>
            <IconButton
              aria-haspopup="true"
              onClick={handleMobileSubMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {renderMobileMainMenu}
      {renderMobileSubMenu}
    </div>
  );
}

export default MyAppBar;
