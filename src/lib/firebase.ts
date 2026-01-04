// Firebase configuration and initialization
// Make sure to install Firebase: npm install firebase

let db: any = null;
let firebaseInitialized = false;

try {
  // Dynamic import to handle cases where Firebase is not installed
  const { initializeApp, getApps } = require("firebase/app");
  const { getFirestore } = require("firebase/firestore");

  // Firebase configuration
  // Replace these with your actual Firebase config values from Firebase Console
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "your-api-key",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "your-project.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "your-project-id",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "your-project.appspot.com",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "your-sender-id",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "your-app-id",
  };
  
  // Initialize Firebase only if not already initialized
  let app;
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }

  // Initialize Firestore
  db = getFirestore(app);
  firebaseInitialized = true;
} catch (error) {
  console.warn("Firebase not initialized. Please install Firebase: npm install firebase");
  firebaseInitialized = false;
}

export { db, firebaseInitialized };
export default db;

