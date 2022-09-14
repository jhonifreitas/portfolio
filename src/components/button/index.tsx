import './style.css';

interface Props {
  className: string;
  children: JSX.Element | string;
  link?: string;
  onClick?: () => void;
}

export default function Button(props: Props) {
  return (
    <>
      {props.link ?
        <a
          className={`btn rounded-0 text-uppercase font-weight-semi-bold ${ props.className }`}
          href={ props.link }
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          { props.children }
        </a>
      : 
        <button
          className={`btn rounded-0 text-uppercase font-weight-semi-bold ${ props.className }`}
          onClick={props.onClick}
        >
          { props.children }
        </button>
      }
    </>
  );
}