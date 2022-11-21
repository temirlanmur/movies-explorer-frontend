import '../../Utility/Article/Article.css';
import '../../Utility/SectionHeading/SectionHeading.css';
import '../../Utility/Timeline/Timeline.css';
import './AboutProject.css';
import CONSTANTS from '../constants';

export default function AboutProject() {
  return (
    <section className="about-project" id={CONSTANTS.ABOUT_PROJECT_ID}>
      <h2 className="section-heading">О проекте</h2>
      <hr className="section-heading__line" />
      <article className="article about-project__article">
        <h3 className="article__heading">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="article__paragraph">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </article>
      <article className="article about-project__article">
        <h3 className="article__heading">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="article__paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </article>
      <div className="timeline about-project__timeline">
        <span className="timeline__block about-project__timeline-block_first" />
        <span className="timeline__block about-project__timeline-block_second" />
      </div>
    </section>
  );
};
