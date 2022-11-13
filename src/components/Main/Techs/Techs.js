import '../../Utility/SectionHeading/SectionHeading.css';
import './Techs.css';
import CONSTANTS from '../constants';

export default function Techs() {
  return (
    <section className="techs" id={CONSTANTS.TECHS_ID}>
      <h2 className="section-heading">Технологии</h2>
      <hr className="section-heading__line techs__heading-line" />
      <h3 className="techs__subheading">7 технологий</h3>
      <p className="techs__paragraph">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__items">
        <li className="techs__item">HTML</li>
        <li className="techs__item">CSS</li>
        <li className="techs__item">JS</li>
        <li className="techs__item">React</li>
        <li className="techs__item">Git</li>
        <li className="techs__item">Express.js</li>
        <li className="techs__item">mongoDB</li>
      </ul>
    </section>
  );
};
