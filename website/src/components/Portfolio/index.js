import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Button from '../Button'

class Item extends React.Component {
  render(){
    return (
      <div className="col-md-4 col-sm-6 col-12 mb-4">
        <div className="project position-relative">
          <img src={ this.props.image } className="w-100" alt={ this.props.title } title={ this.props.title } />
          <div className="info text-light px-4 py-2">
            <i className="fas fa-desktop h5 mb-0 mr-2"></i>
            <span>website</span>
            <h4 className="font-weight-bold">{ this.props.title }</h4>
          </div>
        </div>
      </div>
    )
  }
}

class Counter extends React.Component {
  render(){
    return (
      <div className="col-md-4 col-sm-6 col-12 text-center">
        <h1 className="text-light font-weight-normal">{ this.props.number }</h1>
        <h3 className="text-light mb-4">{ this.props.title }</h3>
      </div>
    )
  }
}

class Portfolio extends React.Component {
  render() {
    return (
      <section id="Portfolio">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center title">
              <h2 className="mb-1 text-uppercase">{ this.props.t('Portfolio.title') }</h2>
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
            <Item image="/assets/images/portfolio-1.png" title="Sorvetes Urca" />
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <Button className="px-45 btn-outline-dark" link="#">{ this.props.t('Portfolio.button') }</Button>
            </div>
          </div>
        </div>
        <div id="Counter">
          <div className="container">
            <div className="row">
              <Counter number="10" title={ this.props.t('Portfolio.year_experience') } />
              <Counter number="120" title={ this.props.t('Portfolio.projects_delivered') }/>
              <Counter number="50" title={ this.props.t('Portfolio.projects_delivered') }/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Portfolio)
