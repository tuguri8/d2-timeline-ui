import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { observer } from 'mobx-react';
import { red } from '@material-ui/core/colors';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: red[500],
  }
}));

const User = ({user, followUser, unfollowUser}) => {
  const classes = useStyles();
  const userName = user.userName;
  return (
      <ListItem>
        <ListItemAvatar>
          <Avatar aria-label="recipe" className={classes.avatar}>
            {userName.charAt(0)}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={userName} secondary={user.userId}/>
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="add" id={user.userId} onClick={followUser}>
            <Add disabled/>
          </IconButton>
          <IconButton edge="end" aria-label="add" id={user.userId} onClick={unfollowUser}>
            <Remove disabled/>
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
  );
};

export default observer(User);
