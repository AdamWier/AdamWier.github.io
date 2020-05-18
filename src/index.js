import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import firebase from 'firebase/app';
import 'firebase/storage';
import initGitBadge from './badge/badge';
import './badge/badge-gh.css';

const initToasts = () => {
  var elems = document.querySelectorAll('.tooltipped');
  M.Tooltip.init(elems);
  document.getElementById('prod-link').addEventListener('click', toast);
  document.getElementById('master-link').addEventListener('click', toast);
}

const initLink = (buildName) => {
  var storage = firebase.storage();
  const ref = storage.ref(`releases/mega-fitness-app-${buildName}.apk`)
  ref.getDownloadURL()
    .then(link => {
      document.getElementById(`${buildName}-link`)
        .setAttribute('href', link)
      ref.getMetadata().then(metadata => {
        const date = new Date(metadata.timeCreated).toLocaleString();
        document.getElementById(`${buildName}-updated-at`).innerText = date;
        document.getElementById(`${buildName}-preloader`).style.display = 'none';
        document.getElementById(`${buildName}-button`).style.display = 'block';
      })
  })
}

const toast = () => {
  M.toast({html: 'Thank you for tryng my app! Please don\'t hesitate to let me know about any bugs or features you\'d like to see!'})
}

const firebaseConfig = {
  apiKey: "AIzaSyAGDFX6-GcfeCOyV4E-5Yumg7PpEZy8Ce0",
  storageBucket: "myapplication-8a6a6.appspot.com",
};
firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function() {
  initToasts();
  initLink('master');
  initLink('prod');
  initGitBadge();
});