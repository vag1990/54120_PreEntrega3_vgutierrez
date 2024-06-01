import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAN7qVn6z3OGqSf25fIZ9tjv4azZGm24ZM",
  authDomain: "pfinal-54120.firebaseapp.com",
  projectId: "pfinal-54120",
  storageBucket: "pfinal-54120.appspot.com",
  messagingSenderId: "99024016502",
  appId: "1:99024016502:web:979bf8de50292e03c1fb57"
};

initializeApp (firebaseConfig);
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
