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
        const response = await postApi.post(content);
        const token = response.data.token;
        localStorage.setItem("token", token);
        this.logged = true;
        document.location.href="/signup"
    } catch (e) {
      alert('로그인에 실패하였습니다.');
      console.log(e.message);
    }
  }

  @action onChange = (event) => {
    const { name, value } = event.target;
    this[name] = value;
  }

}
