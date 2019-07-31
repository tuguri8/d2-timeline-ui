import { observable, action } from 'mobx';
import * as postApi from '../api/Post';

export default class HomeStore {
  @observable posts = [];

  constructor(root) {
    this.root = root;
  }

  @action load = async () => {
    try {
        const response = await postApi.getHomePost();
        this.posts = response.data;
    } catch (e) {
      alert('Error');
      console.log(e.message);
    }
  }

}
