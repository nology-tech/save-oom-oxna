import { useNavigate } from "react-router";
import "./StoryContainer.scss";

import { useState } from "react";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import storyData from "../../data/storyData";

const StoryContainer = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const handleIncrement = () => {
    if (counter > 4) {
      navigate("/swing-game/play");
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <Layout>
      <div className="story-container">
        <p className="story-container__text">{storyData[counter].story}</p>
        <Button label={"NEXT"} onClick={handleIncrement} />
      </div>
    </Layout>
  );
};

export default StoryContainer;
