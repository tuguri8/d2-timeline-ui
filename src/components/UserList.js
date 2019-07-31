import React from 'react';
import User from './User';
import { makeStyles } from '@material-ui/core/styles';
import { observer } from 'mobx-react';
import Container from '@material-ui/core/Container';
import '../App.css'
import List from '@material-ui/core/List';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

const UserList = ({users, followUser, unfollowUser}) => {
    const classes = useStyles();
    const cardList = users.map(user => (
      <User
        className="list2"
        user={user}
        followUser={followUser}
        unfollowUser={unfollowUser}
        key={user.userId}
      />
    ));
    return (
      <Container maxWidth="sm">
        <div>
          <List className={classes.root}>
          {cardList}
          </List>
        </div>
      </Container>
    );
};

export default observer(UserList);
