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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get() 

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAd = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createdAd,
                ...additionalData
            })
        }catch(error){
            console.log("error creating user", error.message)
        }
    }

    return userRef
}

export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    });

    return await batch.commit()
}

export const convertCollectionSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((acumulator, collection) => {
        acumulator[collection.title.toLowerCase()] = collection
        return acumulator
    }, {})
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () =>auth.signInWithPopup(provider)

export default firebase