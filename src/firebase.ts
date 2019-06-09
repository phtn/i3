import * as app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDz8OS8Ha4-GVI9pk_iG22WSDlyK7YPVFY",
  authDomain: "idle-devs.firebaseapp.com",
  databaseURL: "https://idle-devs.firebaseio.com",
  projectId: "idle-devs",
  storageBucket: "",
  messagingSenderId: "771431146971",
  appId: "1:771431146971:web:11340c4eeaa469fa"
};

const firebase = app.initializeApp(config)

export const provider = new app.auth.GithubAuthProvider()

export default firebase
