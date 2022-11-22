const {
  NODE_ENV = 'development',
  REACT_APP_BACKEND_LOCAL_URL = 'http://localhost:3000',
  REACT_APP_BACKEND_PROD_URL = 'https://api.nostalgic.tree.nomoredomains.icu'
} = process.env;

class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  login({ email, password }) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
      .then(this._handleResponse);
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(response);
  }
}

const BASE_URL = (NODE_ENV === 'development')
  ? REACT_APP_BACKEND_LOCAL_URL
  : REACT_APP_BACKEND_PROD_URL;

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export { mainApi };
