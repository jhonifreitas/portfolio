import React from 'react'
import ReactWOW from 'react-wow'
import './styles.scss'
import { translate } from 'react-i18next'
import { Link } from 'react-scroll'

import Social from '../Social'

class Top extends React.Component {

  render() {
    const mobile = (window.innerWidth < 992) ? true : false
    let cv = '#'
    if (this.props.value) {
      if (this.props.lng === 'pt-BR' || this.props.lng === 'pt') {
        cv = this.props.value.CV_PT.url
      }else{
        cv = this.props.value.CV_EN.url
      }
    }
    return (
      <section id="Top">
        <div className="container">

          <ReactWOW animation="fadeInLeft" delay=".7s"><div className="box-left d-none d-md-block"></div></ReactWOW>
          <ReactWOW animation="fadeInRight" delay=".7s">
            <div className="box-right d-none d-md-block">
              <img src={ this.props.value ? this.props.value.photo.url : '' } className="w-100 h-100 img-cover" alt="" title="Photo" />
            </div>
          </ReactWOW>

          <div className="row">
            <div className="col-md-6 align-self-center">
              <ReactWOW animation="fadeIn" delay=".7s">
                <div className="px-3">
                  <ReactWOW animation="pulse" delay=".9s">
                    <div className="text-center d-md-none mb-3">
                      <img src={ this.props.value ? this.props.value.photo.url : '' } className="rounded-circle w-50" alt="" title="Photo" />
                    </div>
                  </ReactWOW>
                  <h1 className="mb-0 font-weight-bold">{ this.props.value ? this.props.value.name : '' }</h1>
                  { this.props.value &&
                    <h4 className="font-weight-normal">
                      { this.props.lng === 'pt-BR' || this.props.lng === 'pt' ? this.props.value.profession_PT : this.props.value.profession_EN }
                    </h4>
                  }

                  <div className="mt-4">
                    <ReactWOW animation={mobile ? 'fadeInLeft' : 'fadeIn'} delay=".7s">
                      <Link className={`btn rounded-0 text-uppercase font-weight-semi-bold mr-3 px-4 btn-dark ${(mobile) ? 'w-100 mb-2' : ''}`}
                            to="About"
                            smooth={true}
                            duration={900}
                            href={cv}
                      >
                        { this.props.t('Top.hire_me') }
                      </Link>
                    </ReactWOW>
                    <ReactWOW animation={mobile ? 'fadeInRight' : 'fadeIn'} delay=".7s">
                      <Link className={`btn rounded-0 text-uppercase font-weight-semi-bold px-4 btn-outline-dark ${(mobile) ? 'w-100' : ''}`}
                            to="About"
                            smooth={true}
                            duration={900}
                      >
                        { this.props.t('Top.explore_more') }
                      </Link>
                    </ReactWOW>
                  </div>
                </div>
              </ReactWOW>
            </div>
            <ReactWOW animation="fadeIn" delay=".7s">
              <div className="col-md-6 align-self-center text-center d-none d-md-block">
                <h3 className="font-weight-bold my-2">{ this.props.t('Top.contact') }</h3>
                <Social />
              </div>
            </ReactWOW>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Top)
