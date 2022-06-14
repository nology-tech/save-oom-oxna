import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXpJPVKepT1YpgVHSqndLGKBm6yWl0yFc",
  authDomain: "save-oom-oxna.firebaseapp.com",
  projectId: "save-oom-oxna",
  storageBucket: "save-oom-oxna.appspot.com",
  messagingSenderId: "323575125763",
  appId: "1:323575125763:web:0261a180e32421b9663b36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Reference the firestore DB
export const db = getFirestore(app);

export const getUsers = async (db) => {
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  const userList = usersSnapshot.docs.map((doc) => doc.data());
  return userList;
};

// gets a User document given a userId.
/**
 *
 * @param {*} userId
 * @returns a docSnap (document snapshot), to access use docSnap.data(), returns a Promise.
 */
export const getUserFromId = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  return docSnap;
};

export const createUser = async (userId, key, value) => {
  const docRef = doc(db, "users", userId);
  await setDoc(docRef, {
    key: value,
  });
};
