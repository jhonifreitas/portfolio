import { useTranslation } from 'react-i18next';

import './style.css';

import { Skill as SkillModel } from '../../interfaces/skill';

import Title from '../title';

function Item(props: {skill: SkillModel}) {
  const porcent = props.skill.percent+'%';

  return (
    <div className={`col-md-4 col-sm-6 col-12 mb-3 mb-md-4`}>
      <h4>{ props.skill.name }</h4>
      <div className="progress rounded-0">
        <div
          className="progress-bar bg-dark"
          role="progressbar"
          aria-valuenow={props.skill.percent}
          aria-valuemin={0}
          aria-valuemax={100}
          title={porcent}
          style={{ width: porcent }}
        ></div>
      </div>
    </div>
  )
}

export default function Skill(props: {skills: SkillModel[]}) {

  const [translation] = useTranslation('common');

  return (
    <section id="Skill" className="py-8">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <Title text={ translation('Skill.title') } />
          </div>
        </div>
        <div className="row">
          { props.skills.map(skill => <Item key={skill.id} skill={skill} /> )}
        </div>
      </div>
    </section>
  );
}