import { useNavigate } from "react-router";
import "./StoryContainer.scss";

import { useState } from "react";
import Button from "../../components/Button/Button";
import StoryIntro from "../../components/StoryIntro/StoryIntro";
import storyData from "../../data/storyData";

const StoryContainer = () => {
  const [counter, setCounter] = useState(0);
  let navigate = useNavigate();

  const handleIncrement = () => {
    if (counter > 4) {
      navigate("/level-select-card-container");
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="story__container">
      <StoryIntro text={storyData[counter].story} />
      <Button
        buttonStyle={"button-primary"}
        buttonText={"NEXT"}
        onClickEvent={handleIncrement}
      />
    </div>
  );
};

export default StoryContainer;
