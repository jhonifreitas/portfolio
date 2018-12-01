import React from 'react'
import './styles.scss'

import {Animated} from "react-animated-css";

class Loader extends React.Component {
  render() {
    return (
      <Animated animationIn="" animationOut="fadeOut" isVisible={this.props.value ? false : true}>
        <div id="Loader">
          <div className="book">
            <div className="book__page"></div>
            <div className="book__page"></div>
            <div className="book__page"></div>
          </div>
        </div>
      </Animated>
    )
  }
}

export default Loader