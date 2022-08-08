import {makeAutoObservable} from 'mobx';

class UserStore {
  _hasLogin: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setHasLogin = (hasLogin: boolean) => {
    this._hasLogin = hasLogin;
  };

  get isUserHasLogin(): boolean {
    return this._hasLogin;
  }
}

const userStore = new UserStore();
export default userStore;
