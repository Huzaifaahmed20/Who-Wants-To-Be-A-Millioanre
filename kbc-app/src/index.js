import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyClPBLwIOVh27Vb9khE9-W6a-vkKM31ccI",
    authDomain: "become-a-millionare.firebaseapp.com",
    databaseURL: "https://become-a-millionare.firebaseio.com",
    projectId: "become-a-millionare",
    storageBucket: "become-a-millionare.appspot.com",
    messagingSenderId: "1081466937262"
  };
  firebase.initializeApp(config);

  firebase.auth().onAuthStateChanged(user=>{
    if(user){
      console.log("User",user)
      // var convertToObj = JSON.parse(user)
      // console.log(convertToObj)
      // firebase.database().ref("/").push(convertToObj)
    }
    else{
      console.log("Not Signed Up")
    }
  })
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
