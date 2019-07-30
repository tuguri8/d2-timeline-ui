import LoginStore from './login';
import SignupStore from './signup';
import TimelineStore from './timeline';
import PostStore from './post';

class RootStore {
  constructor() {
    this.login = new LoginStore(this);
    this.signup = new SignupStore(this);
    this.timeline = new TimelineStore(this);
    this.post = new PostStore(this);
  }
}

export default RootStore;
