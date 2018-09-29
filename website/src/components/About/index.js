import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Button from '../Button'

class About extends React.Component {
  render() {
    return (
      <section id="About" className="pt-5 mb-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center title">
              <h2 className="mb-1 text-uppercase">{ this.props.t('About.title') }</h2>
              <div className="line d-flex justify-content-center py-1">
                <span></span>
                <span className="small"></span>
                <span></span>
              </div>
              <div className="line d-flex justify-content-center">
                <span></span>
                <span className="small"></span>
              </div>
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
