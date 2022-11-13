import '../../Utility/Link/Link.css';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__heading">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <a
            href="https://github.com/temirlanmur/react-mesto-api-full"
            className="link portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение (Express + React)
          </a>
        </li>
        <li className="portfolio__link-item">
          <a
            href="https://github.com/temirlanmur/task-tracker"
            className="link portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            REST API приложение на ASP.NET Core
          </a>
        </li>
        <li className="portfolio__link-item">
          <a
            href="https://github.com/temirlanmur/project-2"
            className="link portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Бэкенд на Python Django
          </a>
        </li>
      </ul>
    </section>
  );
}
