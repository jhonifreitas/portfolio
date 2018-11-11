import React from 'react'
import './styles.scss'

class Button extends React.Component {

  render() {
    if (this.props.link) {
      return (
        <a
          className={`btn rounded-0 text-uppercase font-weight-semi-bold ${ this.props.className }`}
          href={ this.props.link }
          role="button"
          target="_blank"
        >{ this.props.children }</a>
      )
    }else{
      return (
        <button
          className={`btn rounded-0 text-uppercase font-weight-semi-bold ${ this.props.className }`}
          onClick={this.props.onClick}
        >{ this.props.children }</button>
      )
    }
  }
}

export default Button
