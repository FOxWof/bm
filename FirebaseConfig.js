import { initializeApp, getApp } from 'firebase/app';
 


export function initializeAppIfNecessary() {
    try {

      return getApp();

    } catch (any) {

      const firebaseConfig = {

        apiKey: "AIzaSyDJZJdUtl0JpUNAgz_irqZvDCHA4aMSb8g",
        authDomain: "bmovel-9f869.firebaseapp.com",
        projectId: "bmovel-9f869",
        storageBucket: "bmovel-9f869.appspot.com",
        messagingSenderId: "357465637529",
        appId: "1:357465637529:web:3592d64e85a9440299ae08",
        measurementId: "G-HVZGYDBYDM"

      };

      return initializeApp(firebaseConfig);
    }
  }
  

 
  