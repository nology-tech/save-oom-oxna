import {
  getArrayOfRounds,
  getCorrectGameRoundsForUser,
  getIncorrectGameRoundsForUser,
} from "../api/gameService";
import phonicsData from "../data/phonicsData";

const getLevelData = (level) => {
  if (!level) return null;

  return {
    1: "levelOne",
    2: "levelTwo",
    3: "levelThree",
    4: "levelFour",
    5: "levelFive",
  }[level];
};

/**
 * Get a list of phonics from the static array, based on the level.
 * @param {*} level
 * @returns
 */
const getStaticPhonicsArray = (level) => {
  const levelData = getLevelData(level);
  return Object.keys(phonicsData[levelData]);
};

/**
 * Shuffle that array. Nice and simple algorithm.
 * Code courtesy of Geeks for Geeks.
 * @param {*} array
 * @returns
 */
const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

/**
 * Get the array of sounds for the swing game.
 * Attempts to return a mix of incorrect, correct and new sounds for the given child, based on their
 * past results. Basic algo at the moment!
 * @param {*} id
 * @param {*} level
 * @returns
 */
export const getArrayForSwing = async (id, level) => {
  // 50 wrong = 8
  // 30 new = 4
  // fill up from rest = 3

  const MAX_PER_GAME = 15;
  const MAX_INCORRECT_PER_GAME = 8;
  const MAX_CORRECT_PER_GAME = 4;

  const game = "swing";

  const staticArray = getStaticPhonicsArray(level);
  const incorrect = await getArrayOfRounds(
    id,
    game,
    getIncorrectGameRoundsForUser
  );
  const correct = await getArrayOfRounds(id, game, getCorrectGameRoundsForUser);

  // all results
  const result = new Set();

  // add in at most MAX_INCORRECT_PER_GAME of incorrect answers
  for (const phonic of incorrect) {
    result.add(phonic);
    if (result.length >= MAX_INCORRECT_PER_GAME) {
      console.log("Break!! Reach max incorrect");
      break;
    }
  }

  const maxCorrect = result.length + MAX_CORRECT_PER_GAME;
  // add in at most MAX_CORRECT_PER_GAME of correct answers
  for (const phonic of correct) {
    result.add(phonic);
    if (result.length >= maxCorrect) {
      break;
    }
  }

  // fill up remaining
  for (let i = 0; i < staticArray.length; i++) {
    result.add(staticArray[i]);
    if (result.size >= MAX_PER_GAME) {
      break;
    }
  }

  console.log("At end", result);

  const shuffled = shuffleArray(Array.from(result));

  return shuffled;
};
