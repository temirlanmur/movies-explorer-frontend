class StorageProvider {
  getToken() {
    localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}

const storage = new StorageProvider();

export default storage;
