
const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:process.env.REACT_APP_FIREBASE_authDomain,
    projectId: process.env.REACT_APP_FIREBASE_projectId,
    storageBucket:process.env.REACT_APP_FIREBASE_storageBucket,
    messagingSenderId:process.env.REACT_APP_FIREBASE_messagingSenderId,
    appId: process.env.REACT_APP_FIREBASE_measurementId,
    measurementId:process.env.REACT_APP_FIREBASE_appId
  };
  export default firebaseConfig;