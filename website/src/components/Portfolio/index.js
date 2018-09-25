import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'


class Item extends React.Component {
  render(){
    return (
      <div className="col-md-4 col-sm-6 col-12">
        <div className="project position-relative">
          <img src={ this.props.image } className="w-100" alt={ this.props.title } title={ this.props.title } />
          <div className="info text-light">
            <h4>{ this.props.title }</h4>
          </div>
        </div>
      </div>
    )
  }
}

class Portfolio extends React.Component {
  render() {
    return (
      <section id="Portfolio" className="pb-5 mb-5">
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
        </div>
      </section>
    )
  }
}

export default translate('common')(Portfolio)
