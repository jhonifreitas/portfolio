import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Social from '../Social'

class Footer extends React.Component {
  render() {
    return (
      <footer className="bg-dark py-5">
      	<div className="container">
      		<div className="row align-items-center">
      			<div className="col">
      				<Social />
      			</div>
      			<div className="col text-center text-light">
      				<h5 className="mb-0">{ this.props.t('Footer.all_rights') }</h5>
      			</div>
      			<div className="col text-right">
      				<a className="btn btn-light rounded-circle go-up" href="#Top"><i className="fas fa-long-arrow-alt-up"></i></a>
      			</div>
      		</div>
      	</div>
      </footer>
    )
  }
}

export default translate('common')(Footer)
