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
        console.log(this.posts);
        // alert(signedName);
        // document.location.href="/";
    } catch (e) {
      alert('Error');
      console.log(e.message);
    }
  }

}
