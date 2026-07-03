import Constants from 'expo-constants';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// --- New Imports for Auth Persistence ---
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const extra = Constants.expoConfig?.extra ?? Constants.manifest?.extra ?? {};

const firebaseConfig = {
  apiKey: extra.firebaseApiKey,
  authDomain: extra.firebaseAuthDomain,
  projectId: extra.firebaseProjectId,
  storageBucket: extra.firebaseStorageBucket,
  messagingSenderId: extra.firebaseMessagingSenderId,
  appId: extra.firebaseAppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// --- Initialize Firestore ---
export const db = getFirestore(app);

// --- Initialize Auth with Persistence ---
// This will store the user's login state securely on the device.
// Make sure you have installed the required package:
// npx expo install @react-native-async-storage/async-storage
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
