import React from 'react'
import './styles.scss'

class Item extends React.Component {
  render() {
    return(
      <li className="list-inline-item">
        <a href={ this.props.link } className="btn btn-outline-dark rounded-circle">
          <i className={ this.props.icon }></i>
        </a>
      </li>
    )
  }
}

class Social extends React.Component {
  render() {
    return (
			<ul className="list-inline m-0 social">
        <Item link="" icon="fab fa-linkedin-in" />
        <Item link="" icon="fab fa-github-alt" />
        <Item link="" icon="fab fa-facebook-f" />
        <Item link="" icon="fab fa-whatsapp" />
        <Item link="" icon="fas fa-envelope" />
      </ul>
    )
  }
}

export default Social