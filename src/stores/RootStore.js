import AuthStore from 'stores/AuthStore'

class RootStore {
  constructor() {
    this.authStore = new AuthStore(this)
  }
}

export default RootStore
