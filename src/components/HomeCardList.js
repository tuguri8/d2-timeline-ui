import React, { Component } from 'react';
import HomeCard from './HomeCard';
import { inject, observer } from 'mobx-react';
import Container from '@material-ui/core/Container';
import '../App.css'

@inject('home')
@observer
class HomeCardList extends Component {
  componentDidMount() {
    const { home } = this.props;
    home.load();
  }

  render() {
    const { home } = this.props;
    const posts = home.posts;
    const cardList = posts.map(post => (
      <HomeCard
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

export default HomeCardList;
