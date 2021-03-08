import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyDZ_EdBQt2WtAt1WaTb-xyb8Q54Nr-U2Eo",
    authDomain: "crwn-db-e8a6e.firebaseapp.com",
    projectId: "crwn-db-e8a6e",
    storageBucket: "crwn-db-e8a6e.appspot.com",
    messagingSenderId: "771381218085",
    appId: "1:771381218085:web:b0eb2e1f906d8a53d968cc",
    measurementId: "G-2H05YBQC8L"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () =>auth.signInWithPopup(provider)

export default firebase