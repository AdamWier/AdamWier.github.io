import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey,
  storageBucket,
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

storage.ref('preProd/mega-fitness-app-preprod.apk').getDownloadURL().then(preProductionLink => {
  console.log(preProductionLink)
})