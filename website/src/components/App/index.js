import React from 'react'
import './styles.scss'

import Header from '../Header'
import Top from '../Top'
import About from '../About'
import Skill from '../Skill'
import Service from '../Service'
import Portfolio from '../Portfolio'
import Footer from '../Footer'


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Top />
        <About />
        <Skill />
        <Service />
        <Portfolio />
        <Footer />
      </div>
    )
  }
}

export default App
