import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB61c0XwmkAfjQqe7GBJ9FquoYFS1PcmPg',
  authDomain: 'cargonect-dev-firebase.firebaseapp.com',
  projectId: 'cargonect-dev-firebase',
  storageBucket: 'cargonect-dev-firebase.appspot.com',
  messagingSenderId: '437281014202',
  appId: '1:437281014202:web:b494f823625f0b4ece1d83',
  measurementId: 'G-VCKLPJLYYB',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
