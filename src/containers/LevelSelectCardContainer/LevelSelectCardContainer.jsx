import Layout from "../../components/Layout/Layout";
import LevelSelectCard from "../../components/LevelSelectCard/LevelSelectCard";
import levelSelectData from "../../data/levelSelectData";
import "./LevelSelectCardContainer.scss";

const LevelSelectCardContainer = () => {
  const cardContainerJsx = levelSelectData.map((card) => {
    return (
      <LevelSelectCard
        key={card.heading}
        headingText={card.heading}
        headingImg={card.headingImg}
        paragraphText={card.paragraph}
        buttonText={card.buttonText}
        buttonStyle={card.buttonStyle}
        isLocked={card.isLocked}
        path={card.path}
      />
    );
  });

  return (
    <Layout>
      <div className="levels">
        <h1 className="levels__heading">Levels</h1>
        <div className="levels__card-container">{cardContainerJsx}</div>
      </div>
    </Layout>
  );
};

export default LevelSelectCardContainer;
