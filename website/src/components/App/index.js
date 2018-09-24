import React from 'react'
import './styles.scss'

import Header from '../Header'
import Top from '../Top'
import About from '../About'
import Skill from '../Skill'
import Service from '../Service'
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
        <Footer />
      </div>
    )
  }
}

export default App
