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

  saveSearch({ searchText, searchFlag, searchedMovies }) {
    localStorage.setItem('search_text', searchText);
    localStorage.setItem('search_flag', searchFlag);
    localStorage.setItem('search', JSON.stringify(searchedMovies));
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

  getSearchedMovies() {
    return JSON.parse(localStorage.getItem('search')) || [];
  }
}

const storage = new StorageProvider();

export default storage;
