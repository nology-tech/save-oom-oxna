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

let gameScore = 0;
const SwingGamePlay = () => {
  const game = "swing";
  // should become props?
  const level = 1;

  let currentUserName = "";
  let currentUserId = 0;
  try {
    const { user } = useContext(UserContext);
    currentUserName = user.name;
    currentUserId = user.userId;
  } catch (e) {
    console.error("Error attempting to get userContext!", e);
  }

  const [gameState, setGameState] = useState({
    score: 0,
    index: 0,
    isCorrect: false,
    isGameOver: false,
    isGameReady: false,
    counter: 0,
  });

  const [hintAnimation, setHintAnimation] = useState(false);
  const [phonicsArray, setPhonicsArray] = useState([]);

  // load up the Phonics array
  useEffect(() => {
    getArrayForSwing(currentUserId, 1)
      .then((array) => {
        let newGameState = { ...gameState };
        newGameState.isGameReady = true;
        setGameState(newGameState);
        setPhonicsArray(array);
      })
      .catch((e) => console.error("Error attempting to load phonics array", e));
  }, []);

  const handleAnswer = async (correct) => {
    const currentPhonic = phonicsArray[gameState.index];
    let newGameState = { ...gameState };
    newGameState.isCorrect = correct;
    setHintAnimation(false);

    if (correct) {
      newGameState.score = newGameState.score + 1;
      gameScore = newGameState.score;
      newGameState.counter = newGameState.counter + 1;
      newGameState.index = handleIndexChange();
    } else {
      newGameState.index = newGameState.index + 1;
    }
    setGameState(newGameState);

    // save game results
    try {
      await saveUserRound(
        currentUserId,
        game,
        level,
        newGameState,
        currentPhonic
      );
      console.log(`Saved user round - ${correct ? "" : "in"}correct!`);
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
    if (gameState.index < phonicsArray.length) {
      return gameState.index + 1;
    } else {
      return 0;
    }
  };

  const handleGameEnd = () => {
    let newGameState = { ...gameState };
    newGameState.isGameOver = true;
    setGameState(newGameState);
    console.log(newGameState, gameState, "handleGameEnd");
  };

  const squirrelAnimationType2 = hintAnimation ? "animate__bounce" : "";
  const oomAnimationType = gameState.isCorrect ? "animate__swinging" : "";

  const gameNotAvailable = !gameState.isGameReady || gameState.isGameOver;
  const gameNotAvailableJsx = gameState.isGameOver ? (
    <GameEnd score={gameScore} childName={currentUserName} />
  ) : gameState.isGameReady == false ? (
    <p>Nothing!</p>
  ) : null;

  return (
    <Layout>
      <div className="swing-game-play">
        {gameNotAvailable ? (
          gameNotAvailableJsx
        ) : (
          <>
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
          </>
        )}
      </div>
    </Layout>
  );
};

export default SwingGamePlay;
