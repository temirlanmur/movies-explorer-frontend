import '../Link/Link.css';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__wrapper">
        <p className="not-found__code">404</p>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <a href="#" className="link not-found__link">Назад</a>
    </div>
  );
}
