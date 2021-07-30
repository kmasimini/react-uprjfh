import firebase from '@firebase/app';
require('firebase/auth');


var firebaseConfig = {
  apiKey: "AIzaSyD4X1rWxULVwnd349dagx7xUIEfU1kppAs",
  authDomain: "todo-list-7c42f.firebaseapp.com",
  projectId: "todo-list-7c42f",
  storageBucket: "todo-list-7c42f.appspot.com",
  messagingSenderId: "546484060528",
  appId: "1:546484060528:web:0be06fa3d51b2e8b028fb5"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;