import { observable, action } from 'mobx';
import * as postApi from '../api/Post';

export default class PostStore {
  @observable content = null;

  constructor(root) {
    this.root = root;
  }

  @action onSubmit = async (event) => {
    event.preventDefault();
    const {content} = this;
    try {
        await postApi.posting(content);
        this.content = '';
    } catch (e) {
      alert('글쓰기에 실패하였습니다.');
      console.log(e.message);
    }
  }

  @action onChange = (event) => {
    const { name, value } = event.target;
    this[name] = value;
  }

}
