import { useState } from 'react';

import Slider from 'react-slick';
import { differenceInYears } from 'date-fns';
import { useTranslation } from 'react-i18next';

import { Company } from '../../interfaces/company';
import { Profile } from '../../interfaces/profile';
import { Project, ProjectType } from '../../interfaces/project';

import './style.css';
import Title from '../title';
import Button from '../button';

import ProjectApi from '../../services/apis/project.service';
import CompanyApi from '../../services/apis/company.service';

function Item(props: {project: Project}) {

  const [translation] = useTranslation('common');

  let lang: string = 'pt';
  let icon = 'fas fa-desktop';
  let type: string = props.project.type;
  const defaultImage = `${process.env.PUBLIC_URL}/assets/images/image-default.png`;
  const image = props.project.images[props.project.featured_image] || defaultImage;

  const options = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000
  };

  if (lang === 'pt-BR' || lang === 'pt') {
    if (props.project.type === 'mobile') {
      type = 'aplicativo';
      icon = 'fas fa-mobile-alt';
    } else if (props.project.type === 'website') {
      type = 'site';
    } else if (props.project.type === 'e-commerce') {
      type = 'site de vendas';
      icon = 'fas fa-shopping-cart';
    } else if(props.project.type === 'system'){
      type = 'sistema';
      icon = 'fas fa-laptop-code';
    }
  }

  return (
    <div className="col-md-3 col-sm-4 col-6 mb-4">

      {/* PROJECT */}
      <div className="project h-100" data-toggle="modal" data-target={"#project-"+props.project.id}>
        <div className="image-info position-relative h-100">
          <img src={ image } className="w-100" alt={ props.project.name } title={ props.project.name } />
          <div className="info text-light px-4 py-3">
            <i className={icon+" h5 mb-0 mr-2"}></i>
            <span className="text-capitalize">{type}</span>
            <h4 className="font-weight-bold mb-0">{ props.project.name }</h4>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <div className="modal fade" id={"project-"+props.project.id} tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content rounded-0">
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-md-4">
                  <button type="button" className="close d-md-none" data-dismiss="modal" aria-label="Close">
                    <i aria-hidden="true" className="fas fa-times text-dark"></i>
                  </button>
                  <Slider {...options}>
                    {props.project.images.length === 0 &&
                      <div className="item">
                        <img src={ defaultImage } className="img-fluid mx-auto" alt={ props.project.name } title={ props.project.name } />
                      </div>
                    }

                    { props.project.images.map((url, key) =>
                      <div key={key} className="item">
                        <img src={ url } className="img-fluid mx-auto" alt={ props.project.name } title={ props.project.name } />
                      </div>
                    )}
                  </Slider>
                </div>
                <div className="col-md-8">
                  <div className="all-info py-3">
                    <div className="d-md-flex align-items-center justify-content-between">
                      <h2 className="font-weight-bold">{ props.project.name }</h2>
                      { props.project.link &&
                        <Button link={props.project.link} className="btn-dark px-3 py-1 mb-3 mb-md-0">Acesse</Button>
                      }
                    </div>
                    <h4 className="text-capitalize"><i className={icon+" h5 mb-0 mr-2"}></i>{type}</h4>
                    { props.project.company &&
                      <h4>
                        {translation('Portfolio.company')}:{' '}
                        <a href={props.project.company.link} className="text-dark" target="_blank" rel="noreferrer">
                          {props.project.company.name}
                        </a>
                      </h4>
                    }
                    <div className="mt-4">
                      <pre className="h6">{ lang === 'pt-BR' || lang === 'pt' ? props.project.description_PT : props.project.description_EN }</pre>
                    </div>
                    { props.project.skills.length > 0 &&
                      <div>
                        <h6>{translation('Portfolio.technologies')}</h6>
                        <ul className="list-inline mb-0">
                          { props.project.skills.map((value, key) =>
                            <li key={key} className="list-inline-item font-weight-bold"><i className="fas fa-check mr-2"></i>{value.name}</li>
                          )}
                        </ul>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Counter(props: {title: string; number: number | string}) {
  return (
    <div className="col-md-4 col-sm-6 col-12 text-center">
      <h1 className="text-light font-weight-normal">{ props.number }</h1>
      <h3 className="text-light mb-4">{ props.title }</h3>
    </div>
  );
}

export default function Portfolio(props: {profile: Profile}) {

  const [translation] = useTranslation('common');
  const [filter, setFilter] = useState<ProjectType>();
  const [projects, setProjects] = useState<Project[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);

  const years_experience = differenceInYears(new Date(), new Date(props.profile.profession_init));

  useState(async () => {
    const projects = await ProjectApi.getAll();
    setProjects(projects);

    const companies = await CompanyApi.getAll();
    setCompanies(companies);
  });

  return (
    <section id="Portfolio" className="pt-8">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12">
            <Title text={ translation('Portfolio.title') } />
          </div>
        </div>
        <div className="row filter justify-content-center mb-5">
          <div className="col-12 text-center mb-2 mb-md-0 col-md-auto">
            <Button className={`px-45 btn-outline-dark ${!filter ? 'active': ''}`} onClick={() => setFilter(undefined)}>
              { translation('Portfolio.all') }
            </Button>
          </div>
          <div className="col-12 text-center mb-2 mb-md-0 col-md-auto">
            <Button className={`px-45 btn-outline-dark ${filter === "website" ? 'active': ''}`} onClick={() => setFilter('website')}>
              { translation('Portfolio.websites') }
            </Button>
          </div>
          <div className="col-12 text-center mb-2 mb-md-0 col-md-auto">
            <Button className={`px-45 btn-outline-dark ${filter === "mobile" ? 'active': ''}`} onClick={() => setFilter('mobile')} >
              { translation('Portfolio.apps') }
            </Button>
          </div>
          <div className="col-12 text-center mb-2 mb-md-0 col-md-auto">
            <Button className={`px-45 btn-outline-dark ${filter === "e-commerce" ? 'active': ''}`} onClick={() => setFilter('e-commerce')} >
              { translation('Portfolio.ecommerces') }
            </Button>
          </div>
          <div className="col-12 text-center mb-2 mb-md-0 col-md-auto">
            <Button className={`px-45 btn-outline-dark ${filter === "system" ? 'active': ''}`} onClick={() => setFilter('system')} >
              { translation('Portfolio.systems') }
            </Button>
          </div>
        </div>

        <div className="scroll-y">
          <div className="row grid">
            { projects.map(project => (
              <>
                {(!filter || (project.type === filter)) && <Item key={project.id} project={project} />}
              </>
            ))}
          </div>
        </div>
      </div>
      <div id="Counter">
        <div className="container">
          <div className="row">
            <Counter number={'+'+years_experience} title={ translation('Portfolio.year_experience') } />
            <Counter number={projects.length} title={ translation('Portfolio.projects_delivered') } />
            <Counter number={companies.length} title={ translation('Portfolio.companies') } />
          </div>
        </div>
      </div>
    </section>
  );
}