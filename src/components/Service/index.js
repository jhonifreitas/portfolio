import React from 'react'
import ReactWOW from 'react-wow'
import './styles.scss'
import { translate } from 'react-i18next'

import Title from '../Title'

class Box extends React.Component {
  render(){
    const mobile = (window.innerWidth < 992) ? true : false
    let title = null
    let text = null
    if (this.props.lng === 'pt-BR' || this.props.lng === 'pt') {
      title = this.props.value.title_PT
      text = this.props.value.description_PT
    }else {
      title = this.props.value.title_EN
      text = this.props.value.description_EN
    }
    return (
      <div className={`col ${(mobile) ? 'mb-4' : ''}`}>
        <div className="px-4 text-center">
          <i className={`${ this.props.value.icon } fa-3x`}></i>
          <h3 className="my-3">{ title }</h3>
          <p className="mb-0">{ text }</p>
        </div>
      </div>
    )
  }
}

class Service extends React.Component {
  render() {
    return (
      <section id="Service" className="pt-8">
        <ReactWOW animation="fadeInUp" delay=".2s">
          <div className="card rounded-0">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-12">
                  <Title text={ this.props.t('Service.title') } />
                </div>
              </div>
              <div className="row">
                { this.props.values.map((value, key) => <Box key={key} delay={key} value={value} lng={this.props.lng} />)}
              </div>
            </div>
          </div>
        </ReactWOW>
      </section>
    )
  }
}

export default translate('common')(Service)
