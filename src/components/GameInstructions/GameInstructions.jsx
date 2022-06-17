import Button from "../Button/Button";
import "./GameInstructions.scss";

const GameInstructions = () => {
  return (
    <div className="game-instructions">
      <h1 className="game-instructions__heading">HOW TO PLAY</h1>
      <ul className="game-instructions__list">
        <li>
          A phoneme will appear on the screen and the child will have to say the
          sound of the phoneme shown
        </li>
        <li>
          If the sound is said correctly, click the green button at the bottom
          right of the screen
        </li>
        <li>
          If the sound is not said correctly, click the red button at the bottom
          right of the screen
        </li>
        <li>
          The child will have 1 minute to say as many correct sounds as possible
        </li>
        <li>If the child needs help, click the squirrel to hear the sound</li>
      </ul>
      <Button label={"LET'S PLAY"} />
    </div>
  );
};

export default GameInstructions;
