import '../../Utility/Button/Button.css';
import './Promo.css';
import CONSTANTS from '../constants';

export default function Promo() {
  return (
    <section className="promo">
      <a
        href={`#${CONSTANTS.ABOUT_PROJECT_ID}`}
        className="button promo__button"
      >
        О проекте
      </a>
      <a
        href={`#${CONSTANTS.TECHS_ID}`}
        className="button promo__button"
      >
        Технологии
      </a>
      <a
        href={`#${CONSTANTS.ABOUT_ME_ID}`}
        className="button promo__button"
      >
        Студент
      </a>
      <h1 className="promo__heading">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  );
};
