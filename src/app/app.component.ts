import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAPJlt_0HYwQOZ86qd3_Rn43f-_452xQa4',
  authDomain: 'deal-or-no-deal-gummiees.firebaseapp.com',
  projectId: 'deal-or-no-deal-gummiees',
  storageBucket: 'deal-or-no-deal-gummiees.appspot.com',
  messagingSenderId: '302888729262',
  appId: '1:302888729262:web:f7a92b8f4bf7bdf27a0b3f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'deal-or-no-deal';
}
