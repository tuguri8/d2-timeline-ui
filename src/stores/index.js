import LoginStore from './login';
import SignupStore from './signup';
import TimelineStore from './timeline';
import PostStore from './post';
import SearchStore from './search';
import HomeStore from './home';

class RootStore {
  constructor() {
    this.login = new LoginStore(this);
    this.signup = new SignupStore(this);
    this.timeline = new TimelineStore(this);
    this.post = new PostStore(this);
    this.search = new SearchStore(this);
    this.home = new HomeStore(this);
  }
}

export default RootStore;
