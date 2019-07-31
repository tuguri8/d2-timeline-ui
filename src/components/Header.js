import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Timeline from '@material-ui/icons/Timeline';
import Search from '@material-ui/icons/Search';
import Edit from '@material-ui/icons/Edit';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 100
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function routeTimeline(event) {
    document.location.href="/timeline";;
}

function routePost(event) {
    document.location.href="/post";;
}

function routeSearch(event) {
    document.location.href="/search";;
}

function routeHome(event) {
    document.location.href="/home";;
}

function logout(event) {
  localStorage.removeItem("token")
  alert('로그아웃 되었습니다');
  document.location.href="/";;
}

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
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
                onClick={routeTimeline}
              >
                <Timeline />
          </IconButton>
          <IconButton
                aria-label="write post"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={routePost}
              >
                <Edit />
          </IconButton>
          <IconButton
                aria-label="search"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={routeSearch}
              >
                <Search />
          </IconButton>
          <IconButton
                aria-label="home"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={routeHome}
              >
                <AccountCircle />
          </IconButton>
          <Button color="inherit" onClick={logout}>로그아웃</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
