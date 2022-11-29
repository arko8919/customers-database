import React, { useContext, useState, useEffect } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "../../../firebase";

const AuthContext = React.createContext();

// useAuth hook gives us access to the authentication context
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // Registers the user. Returns a promise
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Logs into the user account
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Logs out the user
  function logout() {
    return signOut(auth);
  }

  // Resets the user password
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  // Changes the email address of the user account
  function updateAccountEmail(email) {
    return updateEmail(auth.currentUser, email);
  }
  // Changes the password of the user account
  function updateAccountPassword(password) {
    return updatePassword(auth.currentUser, password);
  }

  // Set user only when we mount our component and only run once
  useEffect(() => {
    // Firebase how own way to notify you, whenever the user gets set.
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // 1: Did the verification to see if there is a user
      // Setting user
      setCurrentUser(user);
      // 2: If there is a user set loading to false
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // "value" attribute will contain all information we want to provide with our authentication
  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateAccountEmail,
    updateAccountPassword,
  };

  return (
    // Return currentUser as "value" inside this provider to use anywhere in our application
    <AuthContext.Provider value={value}>
      {!loading && children} {/* Only render children when we not loading */}
    </AuthContext.Provider>
  );
}
