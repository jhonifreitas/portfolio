import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './style.css';

import Title from '../title';

import { Service as ServiceModel } from '../../interfaces/service';

import ServiceApi from '../../services/apis/service.service';

function Item(props: {service: ServiceModel}) {
  const lang: string = 'pt';

  let title = props.service.title_EN;
  let text = props.service.description_EN;

  if (lang === 'pt-BR' || lang === 'pt') {
    title = props.service.title_PT;
    text = props.service.description_PT;
  }

  return (
    <div className={`col-md col-12 mb-4 mb-md-0`}>
      <div className="px-4 text-center">
        <img src={props.service.icon} className="img-fluid" alt="" />
        <h3 className="my-3">{ title }</h3>
        <p className="mb-0">{ text }</p>
      </div>
    </div>
  )
}

export default function Service() {

  const [translation] = useTranslation('common');
  const [services, setServices] = useState<ServiceModel[]>([]);

  useState(async () => {
    const services = await ServiceApi.getAll();
    setServices(services);
  });

  return (
    <section id="Service" className="pt-8">
      <div className="card rounded-0">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <Title text={ translation('Service.title') } />
            </div>
          </div>
          <div className="row">
            { services.map(service => <Item key={service.id} service={service} />)}
          </div>
        </div>
      </div>
    </section>
  );
}