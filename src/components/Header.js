import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Timeline from '@material-ui/icons/Timeline';
import Search from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            D2-Timeline
          </Typography>
          <IconButton
                aria-label="timeline"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Timeline />
          </IconButton>
          <IconButton
                aria-label="home"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
          </IconButton>
          <IconButton
                aria-label="search"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <Search />
          </IconButton>
          <Button color="inherit">로그아웃</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
