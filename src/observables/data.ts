import { observable, action } from "mobx";
import { createContext } from "react";
import firebase, { provider, db } from "../firebase";

provider.addScope("repo");

class AppData {
  @observable uid: any = ""
  @observable user: any = "";
  @observable photoURL: any;
  @observable connectionStatus: string = 'Continue with Github'
  version: string = '1.0.1'

  @observable devs: any = []
  @observable userData: any = []

  @action
  fetchDevs() {
    db.collection('devs').get()
      .then(this.fetchDevsSuccess).catch(error => window.console.log(error.message))
  }

  @action.bound
  fetchDevsSuccess(snapshot: any) {
    let d: any = []

    return snapshot.forEach((doc: { data: () => void; }) => {
      d.push(doc.data())
      this.devs = d
    })
  }

  checkAuthState() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.uid = user.uid
        this.user = user.displayName;
        this.photoURL = user.photoURL;
        this.connectionStatus = 'Connecting...'
        // this.fetchUserData(user.uid)
        // window.console.log(user.uid)
      }
    });
  }


  @action // SIGN IN WITH GITHUB
  signInWithGithub() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        if (result.user) {
          window.console.log(result.user.uid)

          const docRef = db.collection('users').doc(result.user.uid)
          const userId = result.user.uid
          const userDisplayName = result.user.displayName

          docRef.get().then(userDoc => {
            if (!userDoc.exists) { // ✨ NEW USER ✨
              db.collection('users').doc(userId)
                .set({
                  name: userDisplayName,
                  coins: 0,
                  level: 1,
                  createdAt: new Date(),

                  devs: [{ name: 'Dan Abramov', income: 400, id: '01' }, { name: 'Emma Wedekind', income: 600, id: '02' }],
                })
                .then(() => {
                  // TODO: PASS DATA TO OBSERVABLE
                  window.console.log(userDisplayName)
                })
                .catch(error => window.console.warn(error));
            }

            // 🌟 EXISTING USER 🌟
            // TODO: PASS DATA TO OBSERVABLE

            db.collection('users').doc(userId).get().then( (doc: { data: () => void; } ) => {
              // if (doc.exists){
                window.console.log('user exists: ', doc.data())
              // }
            })





          })

          // db.runTransaction(async transaction => {
          //   const userDoc = await transaction.get(docRef);

          //   if (!userDoc.exists) { // NEW USER
          //     db.collection('users').doc(userId)
          //       .set({
          //         devs: [{ dan: 'Dan Abramov' }, { emma: 'Emma Wedekind' }],
          //         name: userDisplayName,
          //         coins: 0
          //       }, { merge: true })
          //       .then(() => window.console.log('data is set'))
          //       .catch(error => window.console.warn(error));
          //   }

          //   docRef.get().then( userDoc => {
          //     if (userDoc.exists){
          //       window.console.log(userDoc.data())
          //     }
          //   })


          // }) // TRANSACTION
        }
      })
      .catch(error => window.console.log(error));
  }

  @action
  fetchUserData() {
    if (this.uid){
      db.collection('users').doc(this.uid).get().then(userDoc => {
        if (userDoc.exists) {
          // window.console.log(userDoc.data())
          this.userData = userDoc.data()
        }
      })
    }
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
