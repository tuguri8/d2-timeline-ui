import { observable, action } from 'mobx';
// import * as followApi from '../api/Follow';

export default class SearchStore {
  @observable userName = null;

  constructor(root) {
    this.root = root;
  }

  @action onSubmit = async (event) => {
    event.preventDefault();
    const {userName} = this;
    try {
        // await postApi.posting(content);
        this.userName = '';
    } catch (e) {
      alert('친구찾기에 실패하였습니다.');
      console.log(e.message);
    }
  }

  @action onChange = (event) => {
    const { name, value } = event.target;
    this[name] = value;
  }

}
