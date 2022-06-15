import Layout from "../../components/Layout/Layout";
import LevelSelectCard from "../../components/LevelSelectCard/LevelSelectCard";
import levelSelectData from "../../data/levelSelectData";
import "./LevelSelect.scss";

const LevelSelect = ({ gameName }) => {
  return (
    <Layout>
      <div className="level-select">
        <h1 className="level-select__heading">{gameName} Levels</h1>
        <div className="level-select__container">
          {levelSelectData.map((level) => (
            <LevelSelectCard
              key={level.heading}
              heading={level.heading}
              isLocked={level.isLocked}
              headingImg={level.headingImg}
              paragraph={level.paragraph}
              buttonLabel={level.buttonLabel}
              buttonClassName={level.buttonClassName}
              path={level.path}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LevelSelect;
