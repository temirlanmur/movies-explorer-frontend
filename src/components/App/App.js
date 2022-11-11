import './App.css';
import Navigation from '../Navigation';
import Main from '../Main';

export default function App() {
  return (
    <>
      <Navigation isLoggedIn={true} />
      <Main />
    </>
  );
};
