import React from 'react'
import './styles.scss'

class Loader extends React.Component {
  render() {
    return (
      <div className="book">
        <div className="book__page"></div>
        <div className="book__page"></div>
        <div className="book__page"></div>
      </div>
    )
  }
}

export default Loader