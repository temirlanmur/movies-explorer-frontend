import { useHistory } from 'react-router-dom';

import '../Link/Link.css';
import './NotFound.css';

export default function NotFound() {

  const history = useHistory();

  return (
    <div className="not-found">
      <div className="not-found__wrapper">
        <p className="not-found__code">404</p>
        <p className="not-found__text">Страница не найдена</p>
      </div>
      <button
        type="button"
        onClick={history.goBack}
        className="link not-found__link"
      >
        Назад
      </button>
    </div>
  );
}
