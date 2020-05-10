import firebase from 'firebase/app';
import 'firebase/storage';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

function toast() {
  M.toast({html: 'Thank you for tryng my app! Please don\'t hesitate to let me know about any bugs or features you\'d like to see!'})
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems);
  document.getElementById('preproduction-link').addEventListener('click', toast)
});

const firebaseConfig = {
  apiKey: "AIzaSyAGDFX6-GcfeCOyV4E-5Yumg7PpEZy8Ce0",
  storageBucket: "myapplication-8a6a6.appspot.com",
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

storage.ref('preProd/mega-fitness-app-preprod.apk')
  .getDownloadURL()
  .then(preProductionLink => {
    document.getElementById('preproduction-link')
      .setAttribute('href', preProductionLink)
  })