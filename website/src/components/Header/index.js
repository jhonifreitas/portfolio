import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      scrollPositionY: 0,
    }
  }

  componentDidMount() {
    return window.addEventListener('scroll', debounce(this.handleScroll, 16))
  }

  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 16))
  }

  handleScroll = () => {
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }

  render() {
    const isScrolling = !!this.state.scrollPositionY
    return (
      <header className={(isScrolling) ? 'scrolling' : ''}>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-2 fixed-top">
          <div className="container px-0">
            <a className="navbar-brand font-weight-bold text-dark" href="#top">mejf.</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-md-auto">
                <li className="nav-item current">
                  <a className="nav-link text-dark px-3 text-uppercase" href="#top">{ this.props.t('Header.home') }</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark px-3 text-uppercase" href="#about">{ this.props.t('Header.about') }</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark px-3 text-uppercase" href="#service">{ this.props.t('Header.service') }</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark px-3 text-uppercase" href="#portfolio">{ this.props.t('Header.portfolio') }</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark px-3 text-uppercase" href="#contact">{ this.props.t('Header.contact') }</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default translate('common')(Header)
