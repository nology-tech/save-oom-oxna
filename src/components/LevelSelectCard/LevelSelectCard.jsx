import { Link } from "react-router-dom";
import Button from "../Button/Button";
import NavBarHeading from "../NavBarHeading/NavBarHeading";
import "./LevelSelectCard.scss";

const LevelSelectCard = ({
  heading,
  headingImg,
  paragraph,
  buttonLabel,
  isLocked,
  path,
  buttonIsSecondary,
}) => {
  return (
    <div className="level-select-card">
      <NavBarHeading
        headingText={heading}
        headingImg={headingImg}
        headingStyle={"level-select"}
        isLocked={isLocked}
      />
      <p className="level-select-card__text">{paragraph}</p>
      <div className="level-select-card__button">
        <Link to={path}>
          <Button label={buttonLabel} isSecondary={buttonIsSecondary} />
        </Link>
      </div>
    </div>
  );
};

export default LevelSelectCard;
