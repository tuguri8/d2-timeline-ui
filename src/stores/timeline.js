import { observable, action } from 'mobx';
import * as timelineApi from '../api/Timeline';

export default class TimelineStore {
  @observable posts = [];

  constructor(root) {
    this.root = root;
  }

  @action load = async () => {
    try {
        const response = await timelineApi.getTimelinePost();
        this.posts = response.data;
    } catch (e) {
      alert('Error');
      console.log(e.message);
    }
  }

}
