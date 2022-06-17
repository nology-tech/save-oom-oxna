import "./PhonicComponent.scss";

const PhonicComponent = ({ phonicText }) => (
  <div className="phonic-component">
    <p className="phonic-component__text">{phonicText}</p>
  </div>
);

export default PhonicComponent;
