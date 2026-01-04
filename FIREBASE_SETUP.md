# Firebase Setup Instructions

## Installation

1. Install Firebase SDK:
```bash
npm install firebase
```

## Configuration

1. Create a Firebase project at https://console.firebase.google.com/

2. Get your Firebase configuration:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click on the Web app icon (`</>`) if you haven't created one
   - Copy the configuration values

3. Create a `.env.local` file in the root directory with your Firebase config:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key-here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Firestore Database Setup

1. Go to Firebase Console > Firestore Database
2. Click "Create database"
3. Start in test mode (for development) or production mode
4. Choose your preferred location
5. Create a collection named `contacts` (or update the code to use your preferred name)

## Security Rules (Recommended)

Update your Firestore security rules to allow writes to the contacts collection:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{contactId} {
      allow create: if request.auth == null || request.auth != null;
      allow read: if request.auth != null; // Only authenticated users can read
    }
  }
}
```

## Testing

After setup, the contact form will automatically save submissions to Firebase Firestore in the `contacts` collection.

