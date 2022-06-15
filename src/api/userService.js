import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import initialUser from "../context/InitialUserContext";
import { db } from "../firebase";
import { getUserById } from "../utils/firebaseGameUtils";

// logs user out, resets user context
export const userLogout = async (setUser) => {
  const auth = getAuth();

  try {
    // sign out of firebase and reset user context
    await signOut(auth);
    setUser(initialUser);
  } catch (error) {
    console.log("there was an error signing out, ", error);
  }
};

// checks if we have a logged in firebase user and sets user accordingly
export const setCurrentUser = (setUser) => {
  const auth = getAuth();

  onAuthStateChanged(auth, async (user) => {
    // if the user is logged out, reset the user context
    if (!user) setUser(initialUser);

    // user is logged in, update the user context with their details
    const userDetails = await getUserById(user.uid);
    const displayName = userDetails.data().key;
    const newUser = {
      name: displayName ?? user.name ?? user.email,
      userId: user.uid,
    };

    setUser(newUser);
  });
};

export const registerUser = async (userData) => {
  const { email, password, firstName } = userData;
  const auth = getAuth();

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const docRef = doc(db, "users", user.uid);
    await setDoc(docRef, {
      key: firstName,
    });

    return true;
  } catch ({ code, message }) {
    console.error(`Error code: ${code}. Error message: ${message}`);
    return false;
  }
};
