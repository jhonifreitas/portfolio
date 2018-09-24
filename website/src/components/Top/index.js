import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Button from '../Button'

class Top extends React.Component {
  render() {
    return (
      <section id="Top" className="mb-5">
        <div className="container">

          <div className="box-left d-none d-md-block"></div>
          <div className="box-right d-none d-md-block"></div>

          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="px-3">
                <h1 className="mb-0 font-weight-bold">Jonathan Freitas</h1>
                <h4 className="font-weight-normal">{ this.props.t('Top.my_job') }</h4>

                <div className="mt-4">
                  <Button className="mr-3 px-4 btn-dark" link="#">{ this.props.t('Top.hire_me') }</Button>
                  <Button className="px-4 btn-outline-dark" link="#">{ this.props.t('Top.explore_more') }</Button>
                </div>
              </div>
            </div>
            <div className="col-md-6">

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Top)
