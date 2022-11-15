import { useState } from 'react';

import Register from '../Register';
import Login from '../Login'

import Header from '../Header';
import Footer from '../Footer';
import Navigation from '../Navigation';

import Main from '../Main';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';

import NotFound from '../Utility/NotFound';

export default function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  function openNavigation() {
    setIsNavOpen(true);
  }

  function closeNavigation() {
    setIsNavOpen(false);
  }

  return (
    <>
      <Header isLoggedIn={true} openNavigation={openNavigation} />
      <Main />
      <Footer />

      <Navigation isOpen={isNavOpen} close={closeNavigation} />
    </>
  );
};
