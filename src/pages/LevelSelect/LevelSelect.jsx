import Layout from "../../components/Layout/Layout";
import LevelSelectCard from "../../components/LevelSelectCard/LevelSelectCard";
import levelSelectData from "../../data/levelSelectData";
import "./LevelSelect.scss";

const LevelSelect = () => {
  return (
    <Layout>
      <div className="level-select">
        <h1 className="level-select__heading">Levels</h1>
        <div className="level-select__container">
          {levelSelectData.map((card) => (
            <LevelSelectCard
              key={card.heading}
              headingText={card.heading}
              paragraphText={card.paragraph}
              headingImg={card.headingImg}
              buttonText={card.buttonText}
              buttonStyle={card.buttonStyle}
              isLocked={card.isLocked}
              path={card.path}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default LevelSelect;
