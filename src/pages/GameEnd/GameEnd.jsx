import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./GameEnd.scss";

const GameEnd = ({ score, childName }) => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="game-end">
      <div className="game-end__top">
        <p className="game-end__timer">Time&apos;s up</p>
        <h1>Amazing effort {childName}</h1>
        <div className="game-end__buttons">
          <Link to="/dashboard">
            <Button label={"Back to Home"} />
          </Link>
          <Button label={"Play Again"} onClick={refreshPage} isSecondary />
        </div>
        <p className="game-end__score">No. of correct sounds: {score}</p>
      </div>
    </div>
  );
};

export default GameEnd;
