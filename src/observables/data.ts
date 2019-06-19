import { observable, action } from "mobx";
import { createContext } from "react";
import firebase, { provider, db } from "../firebase";

provider.addScope("repo");

class AppData {
  @observable user: any = "";
  @observable photoURL: any;
  @observable connectionStatus: string = 'Continue with Github'
  version: string = '1.0.1'

  @observable devs: any = []

  @action
  fetchDevs(){
    db.collection('devs').get()
      .then(this.fetchDevsSuccess).catch(error => window.console.log(error.message))
  }

  @action.bound
  fetchDevsSuccess(snapshot: any){
    let d: any = []

    return snapshot.forEach( (doc: { data: () => void; }) => {
      d.push(doc.data())
      this.devs = d
    })
  }

  checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user.displayName;
        this.photoURL = user.photoURL;
        this.connectionStatus = 'Connecting...'
      }
    });
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
        window.console.log('Signed out.');
      })
      .catch(error => window.console.log(error));
  }

}

export const AppStore = createContext(new AppData());
