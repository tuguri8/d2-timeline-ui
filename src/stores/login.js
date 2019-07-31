import { observable, action } from 'mobx';
import * as authApi from '../api/Auth';

export default class LoginStore {
  @observable id = null;
  @observable password = null;
  @observable logged = false;

  constructor(root) {
    this.root = root;
  }

  @action onSubmit = async (event) => {
    event.preventDefault();
    const {id} = this;
    const {password} = this;
    try {
        const response = await authApi.login(id, password);
        const token = response.data.token;
        localStorage.setItem("token", token);
        this.logged = true;
        document.location.href="/timeline"
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
