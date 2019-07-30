import React, { Component } from 'react';
import TimelineCard from './TimelineCard';
import { inject, observer } from 'mobx-react';
import Container from '@material-ui/core/Container';
import '../App.css'

@inject('timeline')
@observer
class TimelineCardList extends Component {
  componentDidMount() {
    const { timeline } = this.props;
    timeline.load();
  }

  render() {
    const { timeline } = this.props;
    const posts = timeline.posts;
    const cardList = posts.map(post => (
      <TimelineCard
        className="list2"
        post={post}
        key={post.content}
      />
    ));
    return (
      <Container maxWidth="sm">
        <div className="list">
          {cardList}
        </div>
      </Container>
    );
  }
}

export default TimelineCardList;
