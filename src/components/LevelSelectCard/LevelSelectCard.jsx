import { Link } from "react-router-dom";
import lockImage from "../../assets/images/Vectorlock.png";
import Button from "../Button/Button";
import "./LevelSelectCard.scss";

const LevelSelectCard = ({
  heading,
  paragraph,
  buttonLabel,
  isLocked,
  linkTo,
}) => {
  return (
    <div className="level-select-card">
      <div className="level-select-card__heading">
        <h2 className="level-select-card__heading-text">{heading}</h2>
        {isLocked && (
          <img
            className="level-select-card__img"
            src={lockImage}
            alt={heading}
          />
        )}
      </div>
      <p className="level-select-card__text">{paragraph}</p>
      <div className="level-select-card__button">
        <Link to={linkTo}>
          <Button label={buttonLabel} isSecondary={isLocked} />
        </Link>
      </div>
    </div>
  );
};

export default LevelSelectCard;
