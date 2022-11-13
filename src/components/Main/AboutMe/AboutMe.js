import '../../Utility/Link/Link.css';
import '../../Utility/SectionHeading/SectionHeading.css';
import './AboutMe.css';
import avatarPath from '../../../images/avatar.png';
import CONSTANTS from '../constants';

export default function AboutMe() {
  return (
    <section className="about-me" id={CONSTANTS.ABOUT_ME_ID}>
      <h2 className="section-heading about-me__heading">Студент</h2>
      <hr className="section-heading__line about-me__heading-line" />
      <img src={avatarPath} alt="avatar" className="about-me__avatar" />
      <div className="about-me__bio">
        <h3 className="about-me__name">Виталий</h3>
        <p className="about-me__short">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__paragraph">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a
          href="https://github.com/temirlanmur"
          className="link about-me__github"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
      <div className="about-me__portfolio">
        <h3 className="about-me__portfolio-heading">Портфолио</h3>
        <ul className="about-me__links">
          <li className="about-me__link-item">
            <a
              href="https://github.com/temirlanmur/react-mesto-api-full"
              className="link about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение (Express + React)
            </a>
          </li>
          <li className="about-me__link-item">
            <a
              href="https://github.com/temirlanmur/task-tracker"
              className="link about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              REST API приложение на ASP.NET Core
            </a>
          </li>
          <li className="about-me__link-item">
            <a
              href="https://github.com/temirlanmur/project-2"
              className="link about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Бэкенд на Python Django
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
