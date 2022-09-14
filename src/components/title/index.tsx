import './style.css';

export default function Title(props: {text: string}) {
  return (
    <div className="text-center title">
      <h2 className="mb-1 text-uppercase">{ props.text }</h2>
      <div className="line d-flex justify-content-center py-1">
        <span></span>
        <span className="small"></span>
        <span></span>
      </div>
      <div className="line d-flex justify-content-center">
        <span></span>
        <span className="small"></span>
      </div>
    </div>
  );
}