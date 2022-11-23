import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import storage from '../../utils/StorageProvider';

import NotFound from '../Utility/NotFound';
import Popup from '../Utility/Popup';
import ProtectedRoute from '../Utility/ProtectedRoute';

import Register from '../Register';
import Login from '../Login'

import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';

import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';

const MOVIES_URL = 'https://api.nomoreparties.co';

function parseMovie(data) {
  let movie = {};
  movie.country = data.country;
  movie.director = data.director;
  movie.duration = data.duration;
  movie.year = data.year;
  movie.description = data.description;
  movie.image = MOVIES_URL + data.image.url;
  movie.trailerLink = data.trailerLink;
  movie.thumbnail = MOVIES_URL + data.image.url;
  movie.movieId = data.id;
  movie.nameRU = data.nameRU;
  movie.nameEN = data.nameEN;
  return movie;
}

export default function App() {

  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({
    email: '',
    name: '',
    savedMovies: []
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [movies, setMovies] = useState([]);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [popupState, setPopupState] = useState({ isOpen: false, text: '' });

  // ===================================
  // Authorization
  // ===================================
  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserData()
        .then(([profile, movies]) => {
          const { email, name } = profile.data;
          const savedMovies = movies.data;
          setCurrentUser({ email, name, savedMovies });
        })
        .catch((error) => { openPopup(error.message || error.statusText) });
    }
  }, [isLoggedIn]);

  function handleLogin(response) {
    const token = response?.token;
    if (token) {
      storage.setToken(token);
      setIsLoggedIn(true);
      history.push('/movies');
    } else {
      openPopup('Ошибка при попытке входа');
    }
  }

  function handleLogout() {
    storage.removeToken();
    setIsLoggedIn(false);
    setCurrentUser({ email: '', name: '', savedMovies: [] });
    history.push('/signin');
  }

  function checkToken() {
    const token = storage.getToken();
    if (token) {
      mainApi
        .getProfile()
        .then((response) => {
          if (response) {
            setIsLoggedIn(true);
            history.push('/movies');
          }
        })
        .catch((error) => { openPopup(error.message || error.statusText) });
    }
  }

  // ===================================
  // Movies
  // ===================================
  function handleCardButtonClick({ data, savedInstanceId }) {
    if (savedInstanceId) { // delete the movie
      mainApi.deleteMovie(savedInstanceId)
        .then((response) => {
          const updatedSet = currentUser.savedMovies.filter((m) => m.id !== savedInstanceId);
          setCurrentUser((state) => ({ ...state, savedMovies: updatedSet }));
        })
        .catch((error) => { openPopup(error.message || error.statusText) });
    } else { // save the movie
      const movie = parseMovie(data);
      mainApi.saveMovie(JSON.stringify(movie))
        .then((response) => {
          const updatedSet = [response.data, ...currentUser.savedMovies];
          setCurrentUser((state) => ({ ...state, savedMovies: updatedSet }));
        })
        .catch((error) => { openPopup(error.message || error.statusText) });
    }
  }

  // ===================================
  // Navigation
  // ===================================
  function openNavigation() {
    setIsNavOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeNavigation() {
    setIsNavOpen(false);
    document.body.style.overflow = 'visible';
  }

  // Prevents setting "overflow: hidden" when navigation menu is opened and window resized
  function disableNavigation() {
    if (window.innerWidth >= 1024) {
      closeNavigation()
    }
  }

  window.onresize = disableNavigation;

  // ===================================
  // Popup
  // ===================================
  function openPopup(text) {
    setPopupState({ text, isOpen: true});
  }

  function closePopup() {
    setPopupState((state) => ({ ...state, isOpen: false }));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>

        <Route path="/signup">
          <Register onRegister={handleLogin} onError={openPopup} />
        </Route>

        <Route path="/signin">
          <Login onLogin={handleLogin} onError={openPopup} />
        </Route>

        <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
          <Header isLoggedIn={isLoggedIn} openNavigation={openNavigation} />
          <Movies
            movies={movies}
            onSearch={setMovies}
            onCardButtonClick={handleCardButtonClick}
            onFormError={openPopup}
          />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
          <Header isLoggedIn={isLoggedIn} openNavigation={openNavigation} />
          <SavedMovies
            savedMovies={currentUser.savedMovies}
            onFormError={openPopup} />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
          <Header isLoggedIn={isLoggedIn} openNavigation={openNavigation} />
          <Profile onLogout={handleLogout} />
          <Footer />
        </ProtectedRoute>

        <Route exact path="/">
          <Header isLoggedIn={isLoggedIn} openNavigation={openNavigation} />
          <Main />
          <Footer />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>

      <Navigation isOpen={isNavOpen} close={closeNavigation} />
      <Popup
        isOpen={popupState.isOpen}
        text={popupState.text}
        close={closePopup}
      />
    </CurrentUserContext.Provider>
  );
};
