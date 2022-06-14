import { getAuth, signOut } from "firebase/auth";

export const userLogout = async (userContext) => {
  const auth = getAuth();
  try {
    await signOut(auth);
    userContext.setUser(null);
    console.info("logged out");
  } catch (error) {
    console.log("there was an error signing out, ", error);
  }
};
