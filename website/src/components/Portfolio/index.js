import React from 'react'
import './styles.scss'
import { translate } from 'react-i18next'

import Title from '../Title'
import Button from '../Button'

class Item extends React.Component {
  render(){
    let type = this.props.value.type
    if (this.props.value.type === 'mobile') {type = 'aplicativo'}
    else if(this.props.value.type === 'mobile'){type = 'sistema'}

    return (
      <div className="col-md-4 col-sm-6 col-12 mb-4">
        <div className="project position-relative">
          <img src={ this.props.value.featured_image.url } className="w-100" alt={ this.props.value.name } title={ this.props.value.name } />
          <div className="info text-light px-4 py-2">
            <i className="fas fa-desktop h5 mb-0 mr-2"></i>
            <span>{type}</span>
            <h4 className="font-weight-bold">{ this.props.value.name }</h4>
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
    projects: [],
    total_projects: 0,
    total_companys: 0,
  };

  componentDidMount() {
    this.callApi('/project')
      .then(res => this.setState({ projects: res }))
      .catch(err => console.log(err));

    this.callApi('/project/count')
      .then(res => this.setState({ total_projects: res }))
      .catch(err => console.log(err));

    this.callApi('/company/count')
      .then(res => this.setState({ total_companys: res }))
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
      <section id="Portfolio" className="pt-8">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <Title text={ this.props.t('Portfolio.title') } />
            </div>
          </div>
          <div className="row">
            { this.state.projects.map(value => <Item key={value.toString()} value={value} />)}
          </div>
          { this.state.projects.length < this.state.total_projects &&
            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <Button className="px-45 btn-outline-dark" link="#">{ this.props.t('Portfolio.button') }</Button>
              </div>
            </div>
          }
        </div>
        <div id="Counter">
          <div className="container">
            <div className="row">
              <Counter number={this.props.years_experience} title={ this.props.t('Portfolio.year_experience') } />
              <Counter number={this.state.total_projects} title={ this.props.t('Portfolio.projects_delivered') }/>
              <Counter number={this.state.total_companys} title={ this.props.t('Portfolio.companys') }/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Portfolio)
