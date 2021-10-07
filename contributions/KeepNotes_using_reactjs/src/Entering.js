import React, { useState, useEffect } from 'react';
/*import fire from './fire';*/
import Login  from './Login';
import Hero from './Hero';
import './Entering.css';
import uhi from './uhi';

const Entering = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);
  const [help, setHelp]=useState("");
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
 

  const handleLogin = () => {
    clearErrors();
    console.log(email);
    uhi
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
        }
      });
      console.log(help);
  };

  const handleSignup = () => {
    clearErrors();
    uhi
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch((err) => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
        default:
      }
    });
  };

  const handleLogout = () => {
    uhi.auth().signOut();
  };

  const authListener = () => {
    uhi.auth().onAuthStateChanged((user) => {
      if(user){
        clearInputs();
        setUser(user);
      }else{
        setUser("");
      }
    });
  };
  
  useEffect(() => {
    authListener();
  }, []);



  return (
    <div className="Entering">
      {user ? (
        <Hero help={help} handleLogout={handleLogout}/>
      ) : (
      <Login 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        handleLogin={handleLogin} 
        handleSignup={handleSignup} 
        hasAccount={hasAccount} 
        setHasAccount={setHasAccount} 
        emailError={emailError} 
        passwordError={passwordError}
        setHelp={setHelp}
        />
      )}
    </div>
  );
};

export default Entering;