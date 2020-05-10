import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAGDFX6-GcfeCOyV4E-5Yumg7PpEZy8Ce0",
  storageBucket: "myapplication-8a6a6.appspot.com",
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

storage.ref('preProd/mega-fitness-app-preprod.apk').getDownloadURL().then(preProductionLink => {
  document.getElementById('preproduction-link').setAttribute('href', preProductionLink)
})