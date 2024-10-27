import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore'

// Cấu hình Firebase từ biến môi trường
console.log(
  'VITE_FIREBASE_AUTH_DOMAIN',
  import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app); // Optional, nếu bạn không cần analytics thì có thể bỏ qua
const db = getFirestore(app) // Khởi tạo Firestore

export { app, db } // Xuất app và db
