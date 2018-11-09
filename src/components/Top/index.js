import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'
import { Link } from 'react-scroll'

import Social from '../Social'

class Top extends React.Component {

  render() {
    const mobile = (window.innerWidth < 992) ? true : false
    return (
      <section id="Top">
        <div className="container">

          <div className="box-left d-none d-md-block wow fadeInLeft"></div>
          <div className="box-right d-none d-md-flex align-items-center wow fadeInRight">
            <img src={ this.props.value ? this.props.value.photo.url : '' } alt="" title="Photo" />
          </div>

          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="px-3 wow fadeIn">
                <div className="text-center d-md-none mb-3">
                  <img src={ this.props.value ? this.props.value.photo.url : '' } className="rounded-circle w-50 wow pulse" alt="" title="Photo" />
                </div>
                <h1 className="mb-0 font-weight-bold">{ this.props.value ? this.props.value.name : '' }</h1>
                { this.props.value &&
                  <h4 className="font-weight-normal">
                    { this.props.lng === 'pt-BR' || this.props.lng === 'pt' ? this.props.value.profession_PT : this.props.value.profession_EN }
                  </h4>
                }

                <div className="mt-4">
                  <Link className={`btn rounded-0 text-uppercase font-weight-semi-bold mr-3 px-4 btn-dark ${(mobile) ? 'w-100 mb-2 wow fadeInLeft' : ''}`}
                        to="About"
                        smooth={true}
                        duration={900}
                        href="#"
                  >
                    { this.props.t('Top.hire_me') }
                  </Link>
                  <Link className={`btn rounded-0 text-uppercase font-weight-semi-bold px-4 btn-outline-dark ${(mobile) ? 'w-100 wow fadeInRight' : ''}`}
                        to="About"
                        smooth={true}
                        duration={900}
                  >
                    { this.props.t('Top.explore_more') }
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-self-center text-center d-none d-md-block wow fadeIn">
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
