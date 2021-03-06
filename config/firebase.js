import { initializeApp, getApps, getApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

let app

const firebaseConfig = {
     apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
     storageBucket: process.env.STORAGE_BUCKET,
     messagingSenderId: process.env.MESSAGING_SENDER_ID,
     appId: process.env.APP_ID,
     measurementId: process.env.MEASUREMENT_ID,
}

if (!getApps.length) {
     app = initializeApp(firebaseConfig)
} else {
     app = getApp()
}


export const database = getFirestore(app)
export const auth = getAuth(app)