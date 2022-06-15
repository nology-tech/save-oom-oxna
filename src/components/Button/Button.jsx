import "./Button.scss";

const Button = ({ label, className, onClick, type, name }) => (
  <button className={className} onClick={onClick} type={type} name={name}>
    {label}
  </button>
);

export default Button;
