import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Title from '../Title'
import Button from '../Button'

class Item extends React.Component {
  render(){
    return (
      <div className="col-md-4 col-sm-6 col-12 mb-4">
        <div className="project position-relative">
          <img src={ this.props.image } className="w-100" alt={ this.props.title } title={ this.props.title } />
          <div className="info text-light px-4 py-2">
            <i className="fas fa-desktop h5 mb-0 mr-2"></i>
            <span>website</span>
            <h4 className="font-weight-bold">{ this.props.title }</h4>
          </div>
        </div>
      </div>
    )
  }
}

class Counter extends React.Component {
  render(){
    return (
      <div className="col-md-4 col-sm-6 col-12 text-center">
        <h1 className="text-light font-weight-normal">{ this.props.number }</h1>
        <h3 className="text-light mb-4">{ this.props.title }</h3>
      </div>
    )
  }
}

class Portfolio extends React.Component {

  state = {
    response: null
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/projeto');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {

    console.log(this.state.response)
    return (
      <section id="Portfolio" className="pt-8">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <Title text={ this.props.t('Portfolio.title') } />
            </div>
          </div>
          <div className="row">
            <Item image="/assets/images/portfolio-1.png" title="Sorvetes Urca" />
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <Button className="px-45 btn-outline-dark" link="#">{ this.props.t('Portfolio.button') }</Button>
            </div>
          </div>
        </div>
        <div id="Counter">
          <div className="container">
            <div className="row">
              <Counter number="10" title={ this.props.t('Portfolio.year_experience') } />
              <Counter number="120" title={ this.props.t('Portfolio.projects_delivered') }/>
              <Counter number="50" title={ this.props.t('Portfolio.projects_delivered') }/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Portfolio)
