// Firebase configuration and initialization
// Firebase package is required: npm install firebase

// Type definitions
type Firestore = unknown;
type FirebaseApp = unknown;

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

let db: Firestore | null = null;
let firebaseInitialized = false;

// Initialize Firebase dynamically to avoid build errors if package is not installed
if (typeof window !== "undefined" || typeof require !== "undefined") {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const firebaseApp = require("firebase/app");
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const firebaseFirestore = require("firebase/firestore");

    // Initialize Firebase only if not already initialized
    let app: FirebaseApp;
    if (firebaseApp.getApps().length === 0) {
      app = firebaseApp.initializeApp(firebaseConfig);
    } else {
      app = firebaseApp.getApps()[0];
    }

    // Initialize Firestore
    db = firebaseFirestore.getFirestore(app);
    firebaseInitialized = true;
  } catch (_err) {
    // Firebase not installed or initialization error
    firebaseInitialized = false;
    if (process.env.NODE_ENV === "development") {
      console.warn("Firebase not initialized. Make sure Firebase is installed: npm install firebase");
    }
  }
}

export { db, firebaseInitialized };
export default db;

