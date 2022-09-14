import { useTranslation } from 'react-i18next';

import { Profile } from '../../interfaces/profile';

import './style.css';

import Title from '../title';
import Button from '../button';

export default function About(props: {profile: Profile}) {

  const [translation] = useTranslation('common');

  let cv = '#';
  let about = '';
  const lang: string = 'pt';

  if (lang === 'pt-BR' || lang === 'pt') {
    about = props.profile.about_PT;
    
    if (props.profile.CV_PT) cv = props.profile.CV_PT;
  } else {
    about = props.profile.about_EN;

    if (props.profile.CV_EN) cv = props.profile.CV_EN;
  }

  return (
    <section id="About" className="pt-8">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <Title text={ translation('About.title') } />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <p className="mb-5">{about}</p>
            <Button className="px-45 btn-dark" link={cv}>{ translation('About.button') }</Button>
          </div>
        </div>
      </div>
    </section>
  );
}