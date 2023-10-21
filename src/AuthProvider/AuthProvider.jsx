/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContexts = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInformation = {
    user,
    createUser,
    SignIn,
    loading,
    logOut,
    updateUser,
  };
  return (
    <AuthContexts.Provider value={authInformation}>
      {children}
    </AuthContexts.Provider>
  );
};

export default AuthProvider;
