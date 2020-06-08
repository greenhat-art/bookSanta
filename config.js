import firebase from 'firebase'
require('@firebase/firestore') 

var firebaseConfig = {
    apiKey: "AIzaSyCgzc-UdUHduwIFL9K6WbGCNd0tTRteP18",
    authDomain: "booksanta-a45f3.firebaseapp.com",
    databaseURL: "https://booksanta-a45f3.firebaseio.com",
    projectId: "booksanta-a45f3",
    storageBucket: "booksanta-a45f3.appspot.com",
    messagingSenderId: "768997578176",
    appId: "1:768997578176:web:e33f17ad3b7d3afaeb2425"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore();