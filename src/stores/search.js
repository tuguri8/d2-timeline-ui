import { observable, action } from 'mobx';
import * as followApi from '../api/Follow';

export default class SearchStore {
  @observable userName = '';
  @observable searched = false;
  @observable users = [];

  constructor(root) {
    this.root = root;
  }

  @action onSubmit = async (event) => {
    event.preventDefault();
    const {userName} = this;
    try {
        const response = await followApi.searchUser(userName);
        this.searched = true;
        this.users = response.data;
        this.userName = '';
    } catch (e) {
      alert('친구찾기에 실패하였습니다.');
      console.log(e.message);
    }
  }

  @action followUser = async (event) => {
    event.preventDefault();
    try {
      const userId = event.target.id;
      let response = await followApi.followUser(userId);
      response = response.data;
      alert(`${response.userName} 님을 팔로우 하였습니다!`)
      this.userName = '';
    } catch (e) {
      alert('팔로우에 실패하였습니다.');
      console.log(e.message);
    }
  }

  @action unfollowUser = async (event) => {
    event.preventDefault();
    try {
      const userId = event.target.id;
      let response = await followApi.unfollowUser(userId);
      response = response.data;
      alert(`${response.userName} 님을 언팔로우 하였습니다!`)
      this.userName = '';
    } catch (e) {
      alert(e.message);
      console.log(e.message);
    }
  }

  @action onChange = (event) => {
    const { name, value } = event.target;
    this[name] = value;
  }

}
