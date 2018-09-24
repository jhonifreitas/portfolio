import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'


class Box extends React.Component {
  render(){
    return (
      <div className>

      </div>
    )
  }
}

class Service extends React.Component {
  render() {
    return (
      <section id="Service" className="py-5 mb-5">
        <div className="card">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-12 text-center title">
                <h2 className="mb-1 text-uppercase">{ this.props.t('Service.title') }</h2>
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
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Service)
