import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Title from '../Title'
import Button from '../Button'

class About extends React.Component {
  render() {
    let about = ''
    let cv = ''
    if (this.props.value) {
      if (this.props.lng === 'pt-BR' || this.props.lng === 'pt') {
        about = this.props.value.about_PT
        cv = this.props.value.CV_PT.url
      }else{
        about = this.props.value.about_EN
        cv = this.props.value.CV_EN.url
      }
    }
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
              <p className="mb-5">{about}</p>
              <Button className="px-45 btn-dark" link={cv}>{ this.props.t('About.button') }</Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(About)
