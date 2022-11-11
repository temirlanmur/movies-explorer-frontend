import '../../Utility/Button/Button.css';
import './Promo.css';

export default function Promo() {
  return (
    <section className="promo">
      <a href="#" className="button promo__button">О проекте</a>
      <a href="#" className="button promo__button">Технологии</a>
      <a href="#" className="button promo__button">Студент</a>
      <h1 className="promo__heading">
        Учебный проект студента факультета Веб-разработки.
      </h1>
    </section>
  );
};
