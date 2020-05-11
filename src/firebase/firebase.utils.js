import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// firebase configuration
const config = {
    apiKey: "AIzaSyAEsome5RFYpu00j8qkdmw5mR8wx63Syiw",
    authDomain: "crown-db-63dc1.firebaseapp.com",
    databaseURL: "https://crown-db-63dc1.firebaseio.com",
    projectId: "crown-db-63dc1",
    storageBucket: "crown-db-63dc1.appspot.com",
    messagingSenderId: "493164146736",
    appId: "1:493164146736:web:8c73f396ab91674eea3df5",
    measurementId: "G-988FJQB8QF"
};

// Initialize Firebase
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });

        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) => {
    const collectionref = firestore.collection(collectionkey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionref.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        }
    });
    
    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);



export default firebase;