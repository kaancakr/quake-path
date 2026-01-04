# GitHub Pages Deployment with Environment Variables

## Setting Up Environment Variables in GitHub

Since GitHub Pages is a static hosting service, environment variables need to be set during the build process using GitHub Secrets and GitHub Actions.

### Step 1: Add Secrets to Your GitHub Repository

1. Go to your GitHub repository
2. Click on **Settings** (top menu)
3. In the left sidebar, click on **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each of the following secrets:

#### Required Secrets:

- **Name:** `NEXT_PUBLIC_FIREBASE_API_KEY`
  - **Value:** Your Firebase API key

- **Name:** `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
  - **Value:** Your Firebase auth domain (e.g., `your-project.firebaseapp.com`)

- **Name:** `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
  - **Value:** Your Firebase project ID

- **Name:** `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
  - **Value:** Your Firebase storage bucket (e.g., `your-project.appspot.com`)

- **Name:** `NEXT_PUBLIC_MESSAGING_SENDER_ID`
  - **Value:** Your Firebase messaging sender ID

- **Name:** `NEXT_PUBLIC_FIREBASE_APP_ID`
  - **Value:** Your Firebase app ID

### Step 2: Enable GitHub Pages

1. Go to your repository **Settings**
2. Scroll down to **Pages** section
3. Under **Source**, select **GitHub Actions**
4. Save the changes

### Step 3: Push the Workflow File

The `.github/workflows/deploy.yml` file is already created. Just commit and push it:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Step 4: Verify Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You should see the workflow running
3. Once complete, your site will be deployed to GitHub Pages
4. The URL will be: `https://yourusername.github.io/quake-path/`

## Important Notes

⚠️ **Security Warning:**
- `NEXT_PUBLIC_*` variables are embedded in the client-side bundle
- They are visible to anyone who views your website's source code
- Only use Firebase API keys that are restricted to your domain
- Set up Firebase security rules properly

### Firebase Security Rules Recommendation

Make sure your Firestore security rules restrict access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{contactId} {
      // Allow anyone to create (for contact form)
      allow create: if true;
      // Only allow authenticated admins to read
      allow read: if request.auth != null;
    }
  }
}
```

### Restricting Firebase API Key

1. Go to Firebase Console → **APIs & Services** → **Credentials**
2. Click on your API key
3. Under **Application restrictions**, add your GitHub Pages domain:
   - `https://yourusername.github.io`
   - `https://yourusername.github.io/*`
4. Save the restrictions

## Troubleshooting

### Build Fails
- Check that all secrets are set correctly
- Verify the secret names match exactly (case-sensitive)
- Check the Actions tab for error messages

### Firebase Not Working
- Verify environment variables are set correctly
- Check browser console for Firebase errors
- Ensure Firebase security rules allow the operations you need

### Site Not Updating
- Check if the workflow completed successfully
- Clear browser cache
- Wait a few minutes for GitHub Pages to update

