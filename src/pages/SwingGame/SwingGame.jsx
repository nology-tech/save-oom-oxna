import { useContext, useEffect, useState } from "react";
import { saveUserRound } from "../../api/gameService";
import swingingOom from "../../assets/images/Group 146swingingOom.png";
import squirrel from "../../assets/images/squirrel.png";
import AnimatedImage from "../../components/AnimatedImage/AnimatedImage";
import ButtonRoundContainer from "../../components/ButtonRoundContainer/ButtonRoundContainer";
import Layout from "../../components/Layout/Layout";
import NeedsContainer from "../../components/NeedsContainer/NeedsContainer";
import PhonicComponent from "../../components/PhonicComponent/PhonicComponent";
import Timer from "../../components/Timer/Timer";
import UserContext from "../../context/UserContext";
import phonicsData from "../../data/phonicsData";
import { getArrayForSwing } from "../../utils/gameUtils";
import GameEnd from "../GameEnd/GameEnd";
import "./SwingGame.scss";

const SwingGamePage = () => {
  const [gameState, setGameState] = useState({
    score: 0,
    index: 0,
    isCorrect: false,
  });
  const [hintAnimation, setHintAnimation] = useState("");
  const [oomAnimation, setOomAnimation] = useState("");
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

  // adds animate class to squirrel, removes after 3 seconds
  const triggerHintAnimation = () => {
    setHintAnimation("animate__bounce");
    setInterval(() => {
      setHintAnimation("");
    }, 3000);
  };

  // adds animate class to oom, removes after 8 seconds
  const triggerOomAnimation = () => {
    setOomAnimation("animate__swinging");
    setInterval(() => {
      setOomAnimation("");
    }, 8000);
  };

  const handleAnswer = async (isCorrect) => {
    setHintAnimation(false);
    if (isCorrect) {
      triggerOomAnimation();
    }
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
  const handleHint = async () => {
    const currentPhonic = phonicsArray[gameState.index];
    const phonicSound = await phonicsData.levelOne[currentPhonic].sound();
    new Audio(phonicSound).play();

    triggerHintAnimation();
  };

  const handleIndexChange = () => {
    return gameState.index < phonicsArray.length ? gameState.index + 1 : 0;
  };

  const handleGameEnd = () => {
    setIsGameOver(true);
  };

  if (!isLoaded) {
    return (
      <Layout>
        <div className="swing-game">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (isGameOver) {
    return (
      <Layout>
        <div className="swing-game">
          <GameEnd score={gameState.score} childName={user.name} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="swing-game">
        <NeedsContainer />
        <div className="swing-game__phonic">
          <Timer startTime={6000} onTimeUp={handleGameEnd} />
          <PhonicComponent phonicText={phonicsArray[gameState.index]} />
        </div>
        <div onClick={handleHint}>
          <AnimatedImage
            imageToAnimate={squirrel}
            animationClass="animate__animated.animate__fastest"
            animationType={hintAnimation}
            imageStylesClass="swing-game__squirrel"
          />
        </div>
        <AnimatedImage
          imageToAnimate={swingingOom}
          animationClass="animate__animated.animate__fastest"
          animationType={oomAnimation}
          imageStylesClass="swing-game__oom"
        />
        <ButtonRoundContainer
          handleCorrect={() => handleAnswer(true)}
          handleIncorrect={() => handleAnswer(false)}
        />
        <p className="swing-game__score">
          Number Of Correct Sounds: {gameState.score}
        </p>
      </div>
    </Layout>
  );
};

export default SwingGamePage;
