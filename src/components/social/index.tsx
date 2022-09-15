import { useState } from 'react';

import './style.css';

import { Social as SocialModel } from '../../interfaces/social';
import SocialApi from '../../services/apis/social.service';

function Item(props: {social: SocialModel}) {
  let link = props.social.link;

  if (props.social.type === 'whatsapp') link = `https://api.whatsapp.com/send?phone=55${props.social.link}`;
  else if (props.social.type === 'phone') link = `tel:${props.social.link}`;
  else if (props.social.type === 'email') link = `mailto:${props.social.link}`;

  return(
    <li className="list-inline-item">
      <a href={ link } className="btn btn-outline-dark rounded-circle" target="_blank" rel="noreferrer">
        {props.social.type === 'linked-in' && <i className="fab fa-linkedin-in"></i>}
        {props.social.type === 'facebook' && <i className="fab fa-facebook-f"></i>}
        {props.social.type === 'github' && <i className="fab fa-github"></i>}
        {props.social.type === 'whatsapp' && <i className="fab fa-whatsapp"></i>}
        {props.social.type === 'email' && <i className="fas fa-envelope"></i>}
        {props.social.type === 'phone' && <i className="fas fa-phone"></i>}
      </a>
    </li>
  )
}

export default function Social() {
  const [socials, setSocials] = useState<SocialModel[]>([]);

  useState(async () => {
    const socials = await SocialApi.getAll();
    setSocials(socials);
  });

  return (
    <ul className="list-inline m-0 social">
      { socials.map(social => <Item key={social.id} social={social} />)}
    </ul>
  );
}