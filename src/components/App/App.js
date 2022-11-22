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

export default function App() {

  const history = useHistory();

  const [currentUser, setCurrentUser] = useState({ email: '', name: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [popupState, setPopupState] = useState({ isOpen: false, text: '' });

  // ===================================
  // Authorization
  // ===================================
  useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getProfile()
        .then((response) => { setCurrentUser(response.data) })
        .catch((error) => { openPopup(error.message || error.statusText) });
    }
  }, [isLoggedIn]);

  function handleLogin(response) {
    const token = response?.token;
    if (token) {
      storage.setToken(token);
      setIsLoggedIn(true);
      history.push('/');
    } else {
      openPopup('Ошибка при попытке входа');
    }
  }

  function handleLogout() {
    storage.removeToken();
    setIsLoggedIn(false);
    setCurrentUser({ email: '', name: '' });
    history.push('/signin');
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
          <Register />
        </Route>

        <Route path="/signin">
          <Login onLogin={handleLogin} onError={openPopup} />
        </Route>

        <ProtectedRoute path="/movies" isLoggedIn={isLoggedIn}>
          <Header isLoggedIn={isLoggedIn} openNavigation={openNavigation} />
          <Movies onFormError={openPopup} />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path="/saved-movies" isLoggedIn={isLoggedIn}>
          <Header isLoggedIn={isLoggedIn} openNavigation={openNavigation} />
          <SavedMovies onError={openPopup} />
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
