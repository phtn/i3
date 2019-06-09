import { observable } from 'mobx'
import { createContext } from 'react';
import firebase, { provider } from '../firebase'

provider.addScope('repo')




class AppData{
  @observable user: any = '';
  @observable photoURL: any;


  checkAuthState(){
    firebase.auth().onAuthStateChanged( user => {
      if(user){
        this.user = user.displayName;
        this.photoURL = user.photoURL;
        // window.console.log(user.photoURL)
      }
    })
  }
  signInWithGithub(){
    firebase.auth().signInWithPopup(provider).then(result => {
      return result
    }).catch(error => window.console.log(error))
    
  }
  signOut(){
    firebase.auth().signOut().then( () => {
      
      window.console.log(null)
    }).catch( error => window.console.log(error))
  }
  

}

export const AppStore = createContext( new AppData())