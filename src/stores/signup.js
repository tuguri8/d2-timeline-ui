import { observable, action } from 'mobx';
import * as authApi from '../api/Auth';

export default class SignupStore {
  @observable id = null;
  @observable userName = null;
  @observable password = null;
  @observable passwordAgain = null;

  constructor(root) {
    this.root = root;
  }

  @action onSubmit = async (event) => {
    event.preventDefault();
    const {id} = this;
    const {password} = this;
    const {userName} = this;
    try {
        const response = await authApi.signup(id, userName, password);
        const signedName = response.data.userName;
        alert(signedName);
        document.location.href="/";
    } catch (e) {
      alert('회원가입 에러');
      console.log(e.message);
    }
  }

  @action onChange = (event) => {
    const { name, value } = event.target;
    this[name] = value;
  }

}
