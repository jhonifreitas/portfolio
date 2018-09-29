import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Title from '../Title'
import Button from '../Button'

class About extends React.Component {
  render() {
    return (
      <section id="About" className="pt-8">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <Title text={ this.props.t('About.title') } />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <p className="mb-5">{ this.props.t('About.text') }</p>
              <Button className="px-45 btn-dark" link="#">{ this.props.t('About.button') }</Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(About)
