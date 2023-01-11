// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCP0GsGVcxFLcb8AThISLqj_R__Y0urPDw',
  authDomain: 'recruuit-pk.firebaseapp.com',
  projectId: 'recruuit-pk',
  storageBucket: 'recruuit-pk.appspot.com',
  messagingSenderId: '1030941777811',
  appId: '1:1030941777811:web:d49e9cc2b884edc65c9266',
  measurementId: 'G-5BB9VRCCLZ',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app
