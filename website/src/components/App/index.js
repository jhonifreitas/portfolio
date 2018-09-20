import React from 'react'
import './styles.css'

import Header from '../Header'
import Top from '../Top'
import Footer from '../Footer'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Top />
        <Footer />
      </div>
    )
  }
}

export default App
