import ButtonRound from "../ButtonRound/ButtonRound";
import "./ButtonRoundContainer.scss";

const ButtonRoundContainer = ({ handleCorrect, handleIncorrect }) => {
  return (
    <div className="button-round-container">
      <ButtonRound onClick={handleIncorrect} />
      <ButtonRound onClick={handleCorrect} isTick />
    </div>
  );
};

export default ButtonRoundContainer;
