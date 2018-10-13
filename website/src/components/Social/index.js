import React from 'react'
import './styles.scss'

class Item extends React.Component {
  render() {
    return(
      <li className="list-inline-item">
        <a href={ this.props.value.link } className="btn btn-outline-dark rounded-circle">
          <i className={ this.props.value.icon }></i>
        </a>
      </li>
    )
  }
}

class Social extends React.Component {

  state = {
    values: []
  };

  componentDidMount() {
    this.callApi('/social')
      .then(res => this.setState({ values: res }))
      .catch(err => console.log(err));
  }

  callApi = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
			<ul className="list-inline m-0 social">
        { this.state.values.map(value => <Item key={value.toString()} value={value} />)}
      </ul>
    )
  }
}

export default Social
