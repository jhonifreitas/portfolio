import React from 'react'
import './styles.scss'
import WOW from 'wowjs'
import { translate } from 'react-i18next'

import Title from '../Title'

class Item extends React.Component {

  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }

  render(){
    const mobile = (window.innerWidth < 992) ? true : false
    const porcent = this.props.value.porcent+'%'
    console.log(this.props.getKey())
    const delay = '.'+this.props.key+'s'
    return (
      <div className={`col-md-4 col-sm-6 col-12 ${(mobile) ? 'mb-3' : ''}`}>
        <div className="skills wow fadeInRight">
          <h4>{ this.props.value.name }</h4>
          <div className="progress rounded-0" data-wow-delay={delay}>
            <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={this.props.value.porcent} aria-valuemin="0" aria-valuemax="100" title={porcent} style={{ width: porcent }}></div>
          </div>
        </div>
      </div>
    )
  }
}

class Skill extends React.Component {
  render() {
    return (
      <section id="Skill" className="py-8">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 wow fadeIn" data-wow-delay=".2s">
              <Title text={ this.props.t('Skill.title') } />
            </div>
          </div>
          <div className="row">
            { this.props.values.map((value, key) => <Item key={key} value={value} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Skill)
