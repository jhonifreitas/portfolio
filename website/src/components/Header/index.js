import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import { Link } from 'react-scroll'

const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

class Item extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <Link className="nav-link px-3 text-uppercase"
              href=""
              activeClass="current"
              to={ this.props.to}
              spy={true}
              smooth={true}
              offset={ this.props.offset }
              duration={900}
        >
          { this.props.children }
        </Link>
      </li>
    )
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
    const mobile = (window.innerWidth < 992) ? true : false
    return (
      <header>
        <nav className={`navbar navbar-expand-lg py-2 fixed-top ${(isScrolling || mobile) ? 'navbar-dark bg-dark' : 'navbar-light bg-transparent'}`}>
          <div className="container px-0">
            <Link className="navbar-brand font-weight-bold" to="Top" smooth={true} duration={900} href="">jf.</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-md-auto">
                <Item to="Top">{ this.props.t('Header.home') }</Item>
                <Item to="About">{ this.props.t('Header.about') }</Item>
                <Item to="Skill">{ this.props.t('Header.skill') }</Item>
                <Item to="Service" offset={110}>{ this.props.t('Header.service') }</Item>
                <Item to="Portfolio">{ this.props.t('Header.portfolio') }</Item>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default translate('common')(Header)
