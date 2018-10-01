import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Title from '../Title'

class Box extends React.Component {
  render(){
    const mobile = (window.innerWidth < 992) ? true : false
    return (
      <div className={`col-md-4 col-sm-6 col-12 ${(mobile) ? 'mb-4' : ''}`}>
        <div className="px-4 text-center">
          <i className={`${ this.props.icon } fa-3x`}></i>
          <h3 className="my-3">{ this.props.title }</h3>
          <p className="mb-0">{ this.props.text }</p>
        </div>
      </div>
    )
  }
}

class Service extends React.Component {
  render() {
    return (
      <section id="Service" className="pt-8">
        <div className="card rounded-0">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12">
                <Title text={ this.props.t('Service.title') } />
              </div>
            </div>
            <div className="row">
              <Box icon="fas fa-desktop" title="Front-end" text="As a javascript developer, I have experience in HTML5 and CSS3 techniques working with jQuery or more advanced javascript MVC frameworks such as angular" />
              <Box icon="fas fa-code" title="Back-end" text="As a javascript developer, I have experience in HTML5 and CSS3 techniques working with jQuery or more advanced javascript MVC frameworks such as angular" />
              <Box icon="fab fa-hubspot" title="Consultancy" text="As a javascript developer, I have experience in HTML5 and CSS3 techniques working with jQuery or more advanced javascript MVC frameworks such as angular" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Service)
