import React from 'react'
import './styles.scss'
import WOW from 'wowjs'
import { translate, Trans } from 'react-i18next'

import App from '../App'
import Title from '../Title'
import Button from '../Button'

class Item extends React.Component {

  state = {
    active: false,
  }

  componentDidMount(){
    new WOW.WOW({
      live: false
    }).init();
  }

  open_project = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render(){
    let type = this.props.value.type
    let time = this.props.delay ? this.props.delay+1 : 0
    const delay = '.'+(time)+'s'

    if (this.props.lng === 'pt-BR' || this.props.lng === 'pt') {
      if (this.props.value.type === 'mobile') {type = 'aplicativo'}
      else if(this.props.value.type === 'mobile'){type = 'sistema'}
    }

    return (
      <div className={`col-sm-6 col-12 mb-4 wow pulse ${(this.state.active) ? 'col-md-12' : 'col-md-4'}`} data-wow-delay={delay}>
        <div className={`project row ${(this.state.active) ? 'opened' : ''}`} onClick={this.open_project}>
          <div className={this.state.active ? 'col-md-4' : 'col-md-12'}>
            <div className="image-info position-relative">
              <img src={ this.props.value.featured_image.url } className="w-100" alt={ this.props.value.name } title={ this.props.value.name } />
              <div className="info text-light px-4 py-2">
                <i className="fas fa-desktop h5 mb-0 mr-2"></i>
                <span className="text-capitalize">{type}</span>
                <h4 className="font-weight-bold">{ this.props.value.name }</h4>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="all-info p-5">
              <h2 className="font-weight-bold">{ this.props.value.name }</h2>
              <h4 className="text-capitalize">{type}</h4>
              <h4><Trans i18nKey='Portfolio.company'></Trans>: {this.props.value.company.name}</h4>
              <div className="my-4">
                <pre className="h6">{ this.props.lng === 'pt-BR' || this.props.lng === 'pt' ? this.props.value.description_PT : this.props.value.description_EN }</pre>
              </div>
              { this.props.value.skills.length > 0 &&
                <div>
                  <h6><Trans i18nKey='Portfolio.technologies'></Trans></h6>
                  <ul className="list-inline">
                    { this.props.value.skills.map((value, key) =>
                      <li key={key} className="list-inline-item font-weight-bold"><i className="fas fa-check mr-2"></i>{value.name}</li>
                    )}
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Counter extends React.Component {

  componentDidMount(){
    new WOW.WOW({
      live: false
    }).init();
  }

  render(){
    let time = this.props.delay ? this.props.delay+1 : 0
    const delay = '.'+(time)+'s'
    return (
      <div className="col-md-4 col-sm-6 col-12 text-center wow fadeIn" data-wow-delay={delay}>
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
    limit: 9
  };

  componentDidMount() {

    this.loadProjects()
    this.callApi(App.API_URL+'/project/count')
      .then(res => this.setState({ total_projects: res }))
      .catch(err => console.log(err));

    this.callApi(App.API_URL+'/company/count')
      .then(res => this.setState({ total_companys: res }))
      .catch(err => console.log(err));
  }

  callApi = async (url) => {
    const response = await fetch(url);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  loadProjects(){
    this.callApi(App.API_URL+'/project?_limit='+this.state.limit)
      .then(res => {
        this.setState({ projects: res })
        this.setState({ limit: this.state.limit+9 });
      })
      .catch(err => console.log(err));
  }

  show_more = () => {
    this.loadProjects();
  }

  render() {
    return (
      <section id="Portfolio" className="pt-8">
        <div className="container">
          <div className="row mb-5 wow fadeIn" data-wow-delay=".2s">
            <div className="col-md-12">
              <Title text={ this.props.t('Portfolio.title') } />
            </div>
          </div>
          <div className="row">
            { this.state.projects.map((value, key) => <Item key={key} delay={key} value={value} lng={this.props.lng} />)}
          </div>
          { this.state.projects.length < this.state.total_projects &&
            <div className="row mt-5">
              <div className="col-md-12 text-center">
                <Button className="px-45 btn-outline-dark" onClick={this.show_more}>{ this.props.t('Portfolio.button') }</Button>
              </div>
            </div>
          }
        </div>
        <div id="Counter">
          <div className="container">
            <div className="row">
              <Counter number={this.props.years_experience} title={ this.props.t('Portfolio.year_experience') } delay={2}/>
              <Counter number={this.state.total_projects} title={ this.props.t('Portfolio.projects_delivered') } delay={1}/>
              <Counter number={this.state.total_companys} title={ this.props.t('Portfolio.companys') } delay={0}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default translate('common')(Portfolio)
