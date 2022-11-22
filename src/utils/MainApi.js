import storage from "./StorageProvider";

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

  register({ email, name, password }) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, name, password }),
    })
      .then(this._handleResponse);
  }

  getProfile() {
    return this._sendRequest({ url: '/users/me' });
  }

  _handleResponse(response) {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(response);
  }

  _sendRequest({ method = 'GET', url, body = null }) {
    const requestOptions = { method, headers: this._headers };
    const token = storage.getToken();

    if (token) {
      requestOptions.headers['Authorization'] = `Bearer ${token}`;
    }

    if (body) {
      requestOptions.body = body;
    }

    return fetch(this._baseUrl + url, requestOptions)
      .then(this._handleResponse);
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
