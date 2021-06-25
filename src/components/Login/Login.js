import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Firebase/Firebase.config';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
const Login = () => {

  let history = useHistory();
 
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  } else {
      firebase.app();
  }
  const [ setLoggedInUser] = useContext(UserContext)
  const provider = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
      firebase.auth().signInWithPopup(provider)
          .then((result) => {
              const { displayName, email, photoURL, isEmailVerified } = result.user;
              const signedInUser = { username: displayName, useremail: email, userpicture: photoURL, verified: isEmailVerified }
              setLoggedInUser(signedInUser);
              history.push('/');

          }).catch((error) => {
              // Handle Errors here.
             
              const errorMessage = error.message;
           alert(errorMessage)
          });

  }




    return (
        <div className="login_container d-flex justify-content-center align-items-center">
          <div className="container d-flex justify-content-center align-items-center flex-column">
          <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label text-white">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary ext-center">Submit</button>
</form>
<button className="btn btn-primary mt-4" onClick={handleGoogleSignIn}>Log In With Google</button>
          </div>
        </div>
    );
};

export default Login;