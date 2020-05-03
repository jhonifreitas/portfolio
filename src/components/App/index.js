import React from 'react'
import './styles.scss'
import { Helmet } from "react-helmet";

import Loader from '../Loader'
import Header from '../Header'
import Top from '../Top'
import About from '../About'
import Skill from '../Skill'
import Service from '../Service'
import Portfolio from '../Portfolio'
import Footer from '../Footer'

class App extends React.Component {

  state = {
    profile: null,
    skills: [],
    services: []
  };

  componentDidMount() {
    this.callApi(process.env.REACT_APP_API_URL+'/profile?active=true')
      .then(res => this.setState({ profile: res[0] }))
      .catch(err => console.log(err));

    this.callApi(process.env.REACT_APP_API_URL+'/skill?_sort=porcent:desc')
      .then(res => this.setState({ skills: res }))
      .catch(err => console.log(err));

    this.callApi(process.env.REACT_APP_API_URL+'/service')
      .then(res => this.setState({ services: res }))
      .catch(err => console.log(err));
  }

  callApi = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    let years_experience = 0
    if (this.state.profile) {
      years_experience = '+'+this.state.profile.years_experience
    }
    return (
      <div style={{overflow: 'hidden'}}>
        <Helmet>
          <meta name="description" content={ this.state.profile ? this.state.profile.profession_EN : '' }/>
      
          <meta itemprop="name" content="JF - Portfolio"/>
          <meta itemprop="description" content={ this.state.profile ? this.state.profile.profession_EN : '' }/>
          <meta itemprop="image" content={ this.state.profile ? this.state.profile.photo.url : '' } />

          <meta property="og:url" content="https://jhonifreitas.github.io/portfolio"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="JF - Portfolio"/>
          <meta property="og:description" content={ this.state.profile ? this.state.profile.profession_EN : '' }/>
          <meta property="og:image" content={ this.state.profile ? this.state.profile.photo.url : '' }/>
        </Helmet>
        <Loader value={ this.state.profile ? true : false } />
        <Header />
        <Top value={ this.state.profile } />
        <About value={ this.state.profile } />
        <Skill values={ this.state.skills } />
        <Service values={ this.state.services } />
        <Portfolio years_experience={ years_experience } />
        <Footer value={ this.state.profile } />
      </div>
    )
  }
}

export default App
