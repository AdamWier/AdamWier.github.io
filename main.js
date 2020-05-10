import { Template } from 'meteor/templating';
import firebase from 'firebase/app';
import 'firebase/storage';
import './main.html';

const firebaseConfig = {
  apiKey: Meteor.settings.public.FIREBASE_API_KEY,
  storageBucket: Meteor.settings.public.FIREBASE_STORAGE_BUCKET,
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

storage.ref('preProd/mega-fitness-app-preprod.apk').getDownloadURL().then(preProductionLink => {
  Template.links.helpers({
  preProductionLink: preProductionLink,
  productionLink: 'http://freecodecamp.com'
})})

Template.links.onCreated(() => {
  this.preProductionLink = new ReactiveVar('http://freecodecamp.com')
})