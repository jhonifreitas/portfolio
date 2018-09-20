import React from 'react'
import './styles.css'

import Button from '../Button'

class Top extends React.Component {
  render() {
    return (
      <section id="top">
        <div className="container">

          <div className="box-left d-none d-md-block"></div>
          <div className="box-right d-none d-md-block"></div>

          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="px-3">
                <h1 className="mb-0 font-weight-bold">Jonathan Freitas</h1>
                <h4 className="font-weight-normal">Full Stack Developer</h4>

                <div className="mt-4">
                  <Button className="mr-4 px-5 btn-dark" link="#">Hire me</Button>
                  <Button className="px-4 btn-outline-dark" link="#">Explore more</Button>
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

export default Top
