import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Title from '../Title'

class Contact extends React.Component {

  render() {
    return (
      <section id="Contact">
      	<div className="container">
      		<div className="row">
      			<div className="col-md-12">
      				<Title text={ this.props.t('Contact.title') } />
      			</div>
      		</div>
      	</div>
      </section>
    )
  }
}

export default translate('common')(Contact)
