import cross from "../../assets/images/Cross.png";
import tick from "../../assets/images/Tick.png";
import "./ButtonRound.scss";

const ButtonRound = ({ onClick, isTick }) => {
  return (
    <button
      className={`button-round${isTick ? " button-round--tick" : ""}`}
      onClick={onClick}
      aria-label={isTick ? "tick" : "cross"}
    >
      {isTick ? <img src={tick} alt="tick" /> : <img src={cross} alt="cross" />}
    </button>
  );
};

export default ButtonRound;
