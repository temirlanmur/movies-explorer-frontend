class StorageProvider {
  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  saveSearch({ searchText, searchFlag }) {
    localStorage.setItem('search_text', searchText);
    localStorage.setItem('search_flag', searchFlag);
  }

  saveSearchFlag(searchFlag) {
    localStorage.setItem('search_flag', searchFlag)
  }

  saveMovies(movies) {
    localStorage.setItem('search', JSON.stringify(movies));
  }

  saveLastSearch(movies) {
    localStorage.setItem('last_search', JSON.stringify(movies));
  }

  getSearchText() {
    return localStorage.getItem('search_text') || '';
  }

  getSearchFlag() {
    const flag = localStorage.getItem('search_flag');
    if (flag === 'true') {
      return true;
    }
    return false;
  }

  getMovies() {
    return JSON.parse(localStorage.getItem('search')) || [];
  }

  getLastSearch() {
    return JSON.parse(localStorage.getItem('last_search')) || [];
  }
}

const storage = new StorageProvider();

export default storage;
