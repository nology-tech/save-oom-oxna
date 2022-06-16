import { useContext, useEffect, useState } from "react";
import { saveUserRound } from "../../api/gameService";
import swingingOom from "../../assets/images/Group 146swingingOom.png";
import squirrel from "../../assets/images/squirrel.png";
import AnimatedImage from "../../components/AnimatedImage/AnimatedImage";
import Layout from "../../components/Layout/Layout";
import PhonicComponent from "../../components/PhonicComponent/PhonicComponent";
import Timer from "../../components/Timer/Timer";
import ValidateAnswerButtons from "../../components/ValidateAnswerButtons/ValidateAnswerButtons";
import OomsNeedsContainer from "../../containers/OomsNeedsContainer/OomsNeedsContainer";
import UserContext from "../../context/UserContext";
import phonicsData from "../../data/phonicsData";
import { getArrayForSwing } from "../../utils/gameUtils";
import GameEnd from "../GameEnd/GameEnd";
import "./SwingGamePlay.scss";

const SwingGamePlay = () => {
  const [gameState, setGameState] = useState({
    score: 0,
    index: 0,
    isCorrect: false,
  });
  const [hintAnimation, setHintAnimation] = useState(false);
  const [phonicsArray, setPhonicsArray] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { user } = useContext(UserContext);

  // load up the phonics array
  useEffect(async () => {
    if (!user.userId) return;

    const array = await getArrayForSwing(user.userId, 1);
    setPhonicsArray(array);
    setIsLoaded(true);
  }, [user.userId]);

  const handleAnswer = async (isCorrect) => {
    setHintAnimation(false);
    const currentPhonic = phonicsArray[gameState.index];

    const score = gameState.score + (isCorrect ? 1 : 0);
    const index = handleIndexChange();

    setGameState({
      score,
      isCorrect,
      index,
    });

    try {
      await saveUserRound(
        user.userId,
        "swing",
        1,
        { isCorrect, score },
        currentPhonic
      );
      console.log(`Saved user round - ${isCorrect ? "" : "in"}correct!`);
    } catch (e) {
      console.error("Error attempting to save a user's round");
    }
  };

  // TODO: stop sound playing multiple times
  // TODO: allow multiple squirrel animations to be trigger
  const handleHint = async () => {
    setHintAnimation(true);

    const phonic = phonicsArray[gameState.index];
    const phonicSound = await phonicsData.levelOne[phonic].sound();
    new Audio(phonicSound).play();
  };

  const handleIndexChange = () => {
    return gameState.index < phonicsArray.length ? gameState.index + 1 : 0;
  };

  const handleGameEnd = () => {
    setIsGameOver(true);
  };

  const squirrelAnimationType2 = hintAnimation ? "animate__bounce" : "";
  const oomAnimationType = gameState.isCorrect ? "animate__swinging" : "";

  if (!isLoaded) {
    return (
      <Layout>
        <div className="swing-game-play">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (isGameOver) {
    return (
      <Layout>
        <div className="swing-game-play">
          <GameEnd score={gameState.score} childName={user.name} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="swing-game-play">
        <OomsNeedsContainer />
        <div className="swing-game-play__phonic">
          <Timer startTime={60} handleGameEnd={handleGameEnd} />
          <PhonicComponent phonicText={phonicsArray[gameState.index]} />
        </div>
        <div onClick={handleHint}>
          <AnimatedImage
            imageToAnimate={squirrel}
            animationClass={"animate__animated.animate__fastest"}
            animationType={` ${squirrelAnimationType2}`}
            imageStylesClass={"swing-game-play__squirrel"}
          />
        </div>
        <AnimatedImage
          imageToAnimate={swingingOom}
          animationClass={"animate__animated.animate__fastest"}
          animationType={oomAnimationType}
          imageStylesClass={"swing-game-play__oom"}
        />
        <ValidateAnswerButtons
          handleCorrect={() => handleAnswer(true)}
          handleIncorrect={() => handleAnswer(false)}
        />
        <p className="swing-game-play__score">
          Number Of Correct Sounds: {gameState.score}
        </p>
      </div>
    </Layout>
  );
};

export default SwingGamePlay;
