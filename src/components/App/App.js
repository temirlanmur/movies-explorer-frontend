import { useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import NotFound from '../Utility/NotFound';
import Popup from '../Utility/Popup';

import Register from '../Register';
import Login from '../Login'

import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';

import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';

import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies } from './utils';

export default function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [popupState, setPopupState] = useState({ isOpen: false, text: '' });

  function handleSearchFormSubmit(formData) {
    const searchText = formData.text;
    const shortOnly = formData.flag;
    moviesApi.getMovies()
      .then((movies) => {
        const filtered = filterMovies(movies, shortOnly, searchText);
        console.log(filtered);
      })
      .catch((error) => {
        openPopup('Во время запроса произошла ошибка');
      })
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
    <>
      <Switch>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/movies">
          <Header isLoggedIn={true} openNavigation={openNavigation} />
          <Movies onFormSubmit={handleSearchFormSubmit} onFormError={openPopup} />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header isLoggedIn={true} openNavigation={openNavigation} />
          <SavedMovies onError={openPopup} />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header isLoggedIn={true} openNavigation={openNavigation} />
          <Profile />
          <Footer />
        </Route>

        <Route exact path="/">
          <Header isLoggedIn={true} openNavigation={openNavigation} />
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
    </>
  );
};
