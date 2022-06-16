import "./Button.scss";

const Button = ({ label, type, onClick, isSecondary, name }) => {
  const className = `button${isSecondary ? " button--secondary" : ""}`;

  return (
    <button className={className} onClick={onClick} type={type} name={name}>
      {label}
    </button>
  );
};

export default Button;
