import { observable, action } from 'mobx';

export default class SignupStore {
  @observable id = null;
  @observable password = null;
  @observable passwordAgain = null;

  constructor(root) {
    this.root = root;
  }

  @action onSubmit = (event) => {
    event.preventDefault();
    const {id} = this;
    const {password} = this;
    alert(id + "다음" + password);
    document.location.href="/sample"
  }

  @action onChange = (event) => {
    const { name, value } = event.target;
    this[name] = value;
  }

}
