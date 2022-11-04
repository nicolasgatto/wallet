import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

createApp(App).use(router).mount('#app')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJuFTGHABO_WykNuEM8tjtzzrwdajhlp8",
  authDomain: "wallet-b204c.firebaseapp.com",
  projectId: "wallet-b204c",
  storageBucket: "wallet-b204c.appspot.com",
  messagingSenderId: "816661777992",
  appId: "1:816661777992:web:c8d5923f92c76c0921127d",
  databaseURL: "https://wallet-b204c-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);