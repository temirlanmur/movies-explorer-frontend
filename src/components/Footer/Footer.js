import '../Utility/Link/Link.css';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <ul className="footer__trademarks">
        <li className="footer__trademark-item">
          <a
            href="https://practicum.yandex.ru/"
            className="link footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
        </li>
        <li className="footer__trademark-item">
          <a
            href="https://github.com/"
            className="link footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="footer__trademark-item">&copy;2020</li>
      </ul>
    </footer>
  );
}
