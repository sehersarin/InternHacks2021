import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAqH1aVjMJ_Ufpz_WFWsJ9HCiYwn_JqwWc",
    authDomain: "internhacks-tech-mentor-match.firebaseapp.com",
    databaseURL: "https://internhacks-tech-mentor-match-default-rtdb.firebaseio.com",
    projectId: "internhacks-tech-mentor-match",
    storageBucket: "internhacks-tech-mentor-match.appspot.com",
    messagingSenderId: "680718584850",
    appId: "1:680718584850:web:b888f41f03c4c8b6f21ccb",
    measurementId: "G-S322HHNVPG"
    // apiKey: process.env.FIREBASE_API_KEY,
    // authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.FIREBASE_DATABASE_URL,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID
});

export const auth = app.auth()
export default app