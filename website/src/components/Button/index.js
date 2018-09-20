import React from 'react'
import './styles.css'

class Button extends React.Component {

  render() {
    this.className = ''
    if(this.props.className !== undefined){
      this.className = this.props.className
    }

    return (
      <a
        className={`btn rounded-0 py-3 text-uppercase font-weight-medium ${ this.className }`}
        href={`${ this.props.link }`}
        role="button"
      >{ this.props.children }</a>
    )
  }
}

export default Button
