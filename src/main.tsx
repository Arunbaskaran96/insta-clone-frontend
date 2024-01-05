import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import firebase from "firebase/compat/app";
import { Provider } from "react-redux";
import Store from "./Redux/Store.ts";

const firebaseConfig = {
  apiKey: "AIzaSyAlY2tlTdccK2-1bR8dThgqhYyMpJPFvZA",
  authDomain: "test-2007e.firebaseapp.com",
  projectId: "test-2007e",
  storageBucket: "test-2007e.appspot.com",
  messagingSenderId: "1059935706801",
  appId: "1:1059935706801:web:54cf25c968f388077bcc90",
  measurementId: "G-B6HG4TS0LE",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={Store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
