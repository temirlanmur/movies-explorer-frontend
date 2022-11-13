import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Main from '../Main';
import Movies from '../Movies';

import './App.css';

export default function App() {
  return (
    <>
      <Header isLoggedIn={true}/>
      <Movies />
      <Footer />
    </>
  );
};
