import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { storage, mainApi } from '../../utils';

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
  const [authorizationState, setAuthorizationState] = useState({
    isLoggedIn: false,
    tokenChecked: false,
  });

  const [searchedMovies, setSearchedMovies] = useState([]);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [popupState, setPopupState] = useState({ isOpen: false, text: '' });

  // ===================================
  // Authorization
  // ===================================
  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (authorizationState.isLoggedIn) {
      mainApi
        .getUserData()
        .then(([profile, movies]) => {
          const { email, name } = profile.data;
          const savedMovies = movies.data;
          setCurrentUser({ email, name, savedMovies });
        })
        .catch((error) => { openPopup(error.message || error.statusText) });
    }
  }, [authorizationState.isLoggedIn]);

  function handleLogin(response) {
    const token = response?.token;
    if (token) {
      storage.setToken(token);
      setAuthorizationState({ isLoggedIn: true, tokenChecked: true });
      history.push('/movies');
    } else {
      openPopup('Ошибка при попытке входа');
    }
  }

  function handleLogout() {
    storage.removeToken();
    setAuthorizationState((state) => ({ ...state, isLoggedIn: false }));
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
            setAuthorizationState({ isLoggedIn: true, tokenChecked: true });
          }
        })
        .catch((error) => { openPopup(error.message || error.statusText) });
    } else {
      setAuthorizationState((state) => ({ ...state, tokenChecked: true }));
    }
  }

  // ===================================
  // Profile
  // ===================================
  function handleProfileEdit({ email, name }) {
    mainApi.editProfile(JSON.stringify({ email, name }))
      .then((response) => {
        if (response.ok) {
          setCurrentUser((state) => ({
            ...state, email: response.data.email, name: response.data.name
          }));
          openPopup('Данные успешно изменены');
        }
      })
      .catch((error) => { openPopup(error.message || error.statusText) });
  }

  // ===================================
  // Movies
  // ===================================
  function handleCardSave(data) {
    const movie = parseMovie(data);
    mainApi.saveMovie(JSON.stringify(movie))
      .then((response) => {
        const updatedSet = [...currentUser.savedMovies, response.data];
        setCurrentUser((state) => ({ ...state, savedMovies: updatedSet }));
      })
      .catch((error) => { openPopup(error.message || error.statusText) });
  }

  function handleCardDelete(cardId) {
    mainApi.deleteMovie(cardId)
      .then((response) => {
        const updatedSet = currentUser.savedMovies.filter((m) => m.id !== cardId);
        setCurrentUser((state) => ({ ...state, savedMovies: updatedSet }));
      })
      .catch((error) => { openPopup(error.message || error.statusText) });
  }

  function handleCardButtonClick({ data, cardId }) {
    if (cardId) { // delete the movie
      handleCardDelete(cardId);
    } else { // save the movie
      handleCardSave(data);
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
          <Register
            isLoggedIn={authorizationState.isLoggedIn}
            onRegister={handleLogin}
            onError={openPopup}
          />
        </Route>

        <Route path="/signin">
          <Login
            isLoggedIn={authorizationState.isLoggedIn}
            onLogin={handleLogin}
            onError={openPopup}
          />
        </Route>

        <ProtectedRoute path="/movies" authorizationState={authorizationState}>
          <Header isLoggedIn={authorizationState.isLoggedIn} openNavigation={openNavigation} />
          <Movies
            searchedMovies={searchedMovies}
            saveSearchedMovies={setSearchedMovies}
            onCardButtonClick={handleCardButtonClick}
            onFormError={openPopup}
          />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path="/saved-movies" authorizationState={authorizationState}>
          <Header isLoggedIn={authorizationState.isLoggedIn} openNavigation={openNavigation} />
          <SavedMovies
            savedMovies={currentUser.savedMovies}
            onCardDelete={handleCardDelete}
            onFormError={openPopup} />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path="/profile" authorizationState={authorizationState}>
          <Header isLoggedIn={authorizationState.isLoggedIn} openNavigation={openNavigation} />
          <Profile onEdit={handleProfileEdit} onLogout={handleLogout} />
          <Footer />
        </ProtectedRoute>

        <Route exact path="/">
          <Header isLoggedIn={authorizationState.isLoggedIn} openNavigation={openNavigation} />
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
