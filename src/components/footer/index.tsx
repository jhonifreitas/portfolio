import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import './style.css';

import Social from '../social';

export default function Footer() {
  const [translation] = useTranslation('common');

  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className={`col-md-3 text-center text-md-left`}>
            <Social />
          </div>
          <div className={`col-md-6 text-center text-light my-3 my-md-0`}>
            <h5 className="mb-0">{ translation('Footer.all_rights') }</h5>
          </div>
          <div className={`col-md-3 text-center text-md-right`}>
            <Link className="btn btn-light rounded-circle go-up" 
              to="Top"
              smooth={true}
              duration={900}
            >
              <i className="fas fa-long-arrow-alt-up"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}