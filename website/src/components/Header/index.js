import React from 'react'
import './styles.css'

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 fixed-top">
          <div className="container px-0">
            <a className="navbar-brand font-weight-bold text-dark" href="#top">mejf.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-md-auto">
                <li className="nav-item current">
                  <a className="nav-link text-dark px-4 text-uppercase" href="#top">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark px-4 text-uppercase" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark px-4 text-uppercase" href="#service">Service</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark px-4 text-uppercase" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark px-4 text-uppercase" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
