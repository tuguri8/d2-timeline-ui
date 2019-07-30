import LoginStore from './login';
import SignupStore from './signup';

class RootStore {
  constructor() {
    this.login = new LoginStore(this);
    this.signup = new SignupStore(this);
  }
}

export default RootStore;
