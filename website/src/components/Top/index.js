import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Button from '../Button'
import Social from '../Social'

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
            <div className="col-md-6 align-self-center text-center">
              <img src="/assets/images/photo.png" className="rounded-circle w-25" alt="" title="Photo" />
              <h3 className="font-weight-bold my-2">{ this.props.t('Top.contact') }</h3>
              <Social />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Top)
