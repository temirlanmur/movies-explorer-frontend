import './App.css';
import Navigation from '../Navigation';
import Main from '../Main';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <>
      <Navigation isLoggedIn={true} />
      <Main />
      <Footer />
    </>
  );
};
