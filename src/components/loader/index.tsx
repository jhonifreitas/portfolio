import './style.css';

export default function Loader(props: {isVisible: boolean}) {

  return (
    <div id="Loader" className={`${props.isVisible ? 'visible' : 'invisible'}`}>
      <div className="book">
        <div className="book__page"></div>
        <div className="book__page"></div>
        <div className="book__page"></div>
      </div>
    </div>
  );
}
