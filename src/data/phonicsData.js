const getSound = async (letter, level = 1) => {
  const sound = await import(`../assets/sounds/${letter}_${level}.mp3`);
  return sound.default;
};

const phonics = {
  levelOne: {
    s: {
      phonics: "s",
      text: "as in 'sat'",
      sound: () => getSound("s", 1),
    },
    a: {
      phonics: "a",
      text: "as in 'ant'",
      sound: () => getSound("a", 1),
    },
    t: {
      phonics: "t",
      text: "as in 'tap'",
      sound: () => getSound("t", 1),
    },
    p: {
      phonics: "p",
      text: "as in 'pat'",
      sound: () => getSound("p", 1),
    },
    i: {
      phonics: "i",
      text: "as in 'ink'",
      sound: () => getSound("i", 1),
    },
    n: {
      phonics: "n",
      text: "as in 'nap'",
      sound: () => getSound("n", 1),
    },
    m: {
      phonics: "m",
      text: "as in 'mud'",
      sound: () => getSound("m", 1),
    },
    d: {
      phonics: "d",
      text: "as in 'dog'",
      sound: () => getSound("d", 1),
    },
    g: {
      phonics: "g",
      text: "as in 'gap'",
      sound: () => getSound("g", 1),
    },
    o: {
      phonics: "s",
      text: "as in 'on'",
      sound: () => getSound("o", 1),
    },
    c: {
      phonics: "c",
      text: "as in 'cat'",
      sound: () => getSound("c", 1),
    },
    k: {
      phonics: "k",
      text: "as in 'kit'",
      sound: () => getSound("k", 1),
    },
    ck: {
      phonics: "ck",
      text: "as in 'pick'",
      sound: () => getSound("ck", 1),
    },
    u: {
      phonics: "u",
      text: "as in 'up'",
      sound: () => getSound("u", 1),
    },
    e: {
      phonics: "e",
      text: "as in 'egg'",
      sound: () => getSound("e", 1),
    },
    r: {
      phonics: "r",
      text: "as in 'rat'",
      sound: () => getSound("r", 1),
    },
    h: {
      phonics: "h",
      text: "as in 'hot'",
      sound: () => getSound("h", 1),
    },
    b: {
      phonics: "b",
      text: "as in 'big'",
      sound: () => getSound("b", 1),
    },
    f: {
      phonics: "f",
      text: "as in 'fox'",
      sound: () => getSound("f", 1),
    },
    ff: {
      phonics: "ff",
      text: "as in 'puff'",
      sound: () => getSound("ff", 1),
    },
    l: {
      phonics: "l",
      text: "as in 'lid'",
      sound: () => getSound("l", 1),
    },
    ll: {
      phonics: "ll",
      text: "as in 'bell'",
      sound: () => getSound("ll", 1),
    },
    ss: {
      phonics: "ss",
      text: "as in 'dress'",
      sound: () => getSound("ss", 1),
    },
  },
};
export default phonics;
