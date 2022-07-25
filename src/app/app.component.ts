import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD5NUUrheXfT-Ate4LEymw4lEJGUF6TB4o",
  authDomain: "hire-goodies.firebaseapp.com",
  projectId: "hire-goodies",
  storageBucket: "hire-goodies.appspot.com",
  messagingSenderId: "761426387640",
  appId: "1:761426387640:web:75a1d900f7dc5fd53e8a4d"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'hire-goodies';
  docRef = addDoc(collection(db, "users"), {
    first: "Adam",
    last: "Ricardoman",
    born: 99999
  });
}


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration