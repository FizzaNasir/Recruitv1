// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDbtziCEDXYFsp_fiC0LUqox-ChmCmh-gk',
  authDomain: 'recruuittest.firebaseapp.com',
  projectId: 'recruuittest',
  storageBucket: 'recruuittest.appspot.com',
  messagingSenderId: '1079433721729',
  appId: '1:1079433721729:web:969104645573018e121a80',
  measurementId: 'G-GJSS86M21Y',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
