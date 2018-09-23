import React from 'react'
import './styles.css'
import { translate } from 'react-i18next'

import Button from '../Button'

class About extends React.Component {
  render() {
    return (
      <section id="about" className="pt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center title">
              <h2 className="mb-0 text-uppercase">{ this.props.t('About.title') }</h2>
              <div className="line">
                <span></span>
                <span className="small"></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <p className="mb-4">{ this.props.t('About.text') }</p>
              <Button className="px-4 btn-dark" link="#">{ this.props.t('About.button') }</Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(About)