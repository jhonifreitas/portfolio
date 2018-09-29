import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Title from '../Title'

class Item extends React.Component {
  render(){
    return (
      <div className="col-md-4 col-sm-6 col-12">
        <div className="skills">
          <h4>{ this.props.title }</h4>
          <div className="progress rounded-0">
            <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: this.props.porcent + '%' }}></div>
          </div>
        </div>
      </div>
    )
  }
}

class Skill extends React.Component {
  render() {
    return (
      <section id="Skill" className="py-5 mb-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <Title text={ this.props.t('Skill.title') } />
            </div>
          </div>
          <div className="row">
            <Item title="HTML/CSS" porcent="90" />
            <Item title="JavaScript" porcent="60" />
            <Item title="PHP" porcent="70" />
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Skill)
