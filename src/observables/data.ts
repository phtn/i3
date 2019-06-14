import { observable } from "mobx";
import { createContext } from "react";
import firebase, { provider, db } from "../firebase";

provider.addScope("repo");

class AppData {
  @observable user: any = "";
  @observable photoURL: any;
  @observable connectionStatus: string = 'Continue with Github'
  @observable devs: any
  version: string = '1.0.1'
  
  checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.displayName;
        this.photoURL = user.photoURL;
        this.connectionStatus = 'Connecting...'
        // window.console.log(user.photoURL)
      }
    });
  }
  loadDevs(){
    db.collection('devs').get().then( snapshot => {
      snapshot.forEach( doc => window.console.log(doc.data()))
    })
  }
  signInWithGithub() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        return result;
      })
      .catch(error => window.console.log(error));
  }
  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.console.log(null);
      })
      .catch(error => window.console.log(error));
  }
  
}

export const AppStore = createContext(new AppData());
