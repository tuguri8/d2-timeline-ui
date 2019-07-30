import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';

const useStyles = makeStyles({
  card: {
    marginBottom: 10,
    minWidth: 100
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TimelineCard = ({ post }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const createdDate = post.createdDate;
  const dateString = `${createdDate.monthValue}월 ${createdDate.dayOfMonth}일, ${createdDate.hour}:${createdDate.minute}`;
  return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {dateString}
          </Typography>
          <Typography className={classes.pos} variant="h5" component="h2">
            {post.userId}
          </Typography>
          <Typography variant="body2" component="p">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
  );
}

export default observer(TimelineCard);
