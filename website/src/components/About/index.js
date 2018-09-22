import React from 'react'
import './styles.css'
import { translate } from 'react-i18next'

import Button from '../Button'

class About extends React.Component {
  render() {
    return (
      <section id="about" className="pt-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2 className="mb-0 text-uppercase">About</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
              <p className="mb-4">Hello! I'm MUNTASIR, a full stuck developer, a Ruby enthusiast, and a guy slighty obsessed for code quality. Also I'm a co-founder of pykod.com. I’m currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.</p>
              <Button className="px-4 btn-dark" link="#">Download my cv</Button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(About)