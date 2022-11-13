import './App.css';
import Header from '../Header/Header';
import Main from '../Main';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <>
      <Header isLoggedIn={true}/>
      <Main />
      <Footer />
    </>
  );
};
