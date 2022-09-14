import { useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import './style.css';

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;

  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  }
}

function Item(props: {to: string; children: JSX.Element; offset?: number}) {
  return (
    <li className="nav-item">
      <Link
        className="nav-link px-3 text-uppercase"
        href="#"
        activeClass="current"
        to={props.to}
        spy={true}
        smooth={true}
        offset={props.offset}
        duration={900}
      >
        { props.children }
      </Link>
    </li>
  );
}

export default function Header() {

  const [scrollPositionY, setScrollPositionY] = useState(0);

  const mobile = (window.innerWidth < 992) ? true : false;
  const [translation] = useTranslation('common');

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 16));
  });

  function handleScroll() {
    const restul = + window.scrollY;
    return setScrollPositionY(restul);
  }

  return (
    <header>
      <nav className={`navbar navbar-expand-lg py-2 fixed-top ${(!!scrollPositionY || mobile) ? 'navbar-dark bg-dark' : 'navbar-light bg-transparent'}`}>
        <div className="container px-0">
          <Link className="navbar-brand font-weight-bold" to="Top" smooth={true} duration={900} href="">jf.</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-md-auto">
              <Item to="Top">{ translation('Header.home') }</Item>
              <Item to="About">{ translation('Header.about') }</Item>
              <Item to="Skill">{ translation('Header.skill') }</Item>
              <Item to="Service" offset={110}>{ translation('Header.service') }</Item>
              <Item to="Portfolio">{ translation('Header.portfolio') }</Item>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}