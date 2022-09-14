import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { Profile } from '../../interfaces/profile';

import './style.css';

import Social from '../social';

export default function Header(props: {profile: Profile}) {

  const [translation] = useTranslation('common');

  const mobile = (window.innerWidth < 992) ? true : false;

  let cv = '#';
  const lang: string = 'pt';

  if (props.profile.CV_PT && (lang === 'pt-BR' || lang === 'pt')) {
    cv = props.profile.CV_PT;
  } else if (props.profile.CV_EN) {
    cv = props.profile.CV_EN;
  }

  return (
    <section id="Top">
      <div className="container">

        <div className="box-left d-none d-md-block"></div>
        <div className="box-right d-none d-md-block">
          <img src={ props.profile.photo || '' } className="w-100 h-100 img-cover" alt="" title="Photo" />
        </div>

        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="px-3">
              <div className="text-center d-md-none mb-3">
                <img src={ props.profile.photo || '' } className="rounded-circle w-50" alt="" title="Photo" />
              </div>
              <h1 className="mb-0 font-weight-bold">{ props.profile ? props.profile.name : '' }</h1>
              { props.profile &&
                <h4 className="font-weight-normal">
                  { lang === 'pt-BR' || lang === 'pt' ? props.profile.profession_PT : props.profile.profession_EN }
                </h4>
              }

              <div className="mt-4">
                <Link 
                  to="About"
                  smooth={true}
                  duration={900}
                  href={cv}
                  className={`btn rounded-0 text-uppercase font-weight-semi-bold mr-3 px-4 btn-dark mb-2 mb-md-0 ${mobile && 'w-100'}`}
                >
                  { translation('Top.hire_me') }
                </Link>
                <Link
                  to="About"
                  smooth={true}
                  duration={900}
                  className={`btn rounded-0 text-uppercase font-weight-semi-bold px-4 btn-outline-dark ${mobile && 'w-100'}`}
                >
                  { translation('Top.explore_more') }
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-self-center text-center d-none d-md-block">
            <h3 className="font-weight-bold my-2">{ translation('Top.contact') }</h3>
            <Social />
          </div>
        </div>
      </div>
    </section>
  );
}