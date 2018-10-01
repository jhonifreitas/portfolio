import React from 'react'
import './styles.scss'

class Button extends React.Component {

  render() {
    return (
      <a
        className={`btn rounded-0 text-uppercase font-weight-semi-bold ${ this.props.className }`}
        href={ this.props.link }
        role="button"
      >{ this.props.children }</a>
    )
  }
}

export default Button
