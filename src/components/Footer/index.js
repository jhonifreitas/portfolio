import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'
import { Link } from 'react-scroll'

import Social from '../Social'

class Footer extends React.Component {
  render() {
    const mobile = (window.innerWidth < 992) ? true : false
    return (
      <footer className="bg-dark py-5">
      	<div className="container">
      		<div className="row align-items-center">
      			<div className={`col-md-3 ${(mobile) ? 'text-center' : ''}`}>
      				<Social />
      			</div>
      			<div className={`col-md-6 text-center text-light ${(mobile) ? 'my-3' : ''}`}>
      				<h5 className="mb-0">{ this.props.t('Footer.all_rights') }</h5>
      			</div>
      			<div className={`col-md-3 ${(mobile) ? 'text-center' : 'text-right'}`}>
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
    )
  }
}

export default translate('common')(Footer)
