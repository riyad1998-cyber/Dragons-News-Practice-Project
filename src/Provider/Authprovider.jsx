import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { set } from 'date-fns';


const auth = getAuth(app);
const Authprovider = ({children}) => {
  const [user, setUser] = useState (null);
  const [loading, setLoading] = useState(true)


const createUser = (email, password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword (auth, email, password)
};
const loginUser = (email,password)=>{
  setLoading(true)
  return signInWithEmailAndPassword(auth, email,password)
}

const updateUser = (updatedData) =>{
return updateProfile(auth.currentUser, updatedData)

}


const logOut =()=>{
  return signOut(auth);
}

useEffect (()=>{
 const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
  setUser(currentUser)
  setLoading(false)
  });
  return ()=>{
 unsubscribe();
  }
},[])

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    loginUser,
    loading, 
    setLoading,
    updateUser,

  };
    return <AuthContext value={authData}>
      {children}
    </AuthContext>
};

export default Authprovider;