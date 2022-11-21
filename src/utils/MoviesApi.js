class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  getMovies() {
    const requestOptions = { method: 'GET', headers: this._headers };

    return fetch(this._baseUrl, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(response);
      });
  }
}

const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const moviesApi = new Api({
  baseUrl: MOVIES_URL,
  headers: { 'Content-Type': 'application/json' },
});

export {
  MOVIES_URL,
  moviesApi,
};
