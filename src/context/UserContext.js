import { createContext, useEffect, useState } from "react";
import { setCurrentUser } from "../api/userService";
import initialUser from "./InitialUserContext";

const UserContext = new createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  // checks for already logged in user on context load
  useEffect(() => {
    setCurrentUser(setUser);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
