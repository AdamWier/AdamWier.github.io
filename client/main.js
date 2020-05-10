import { Template } from 'meteor/templating';

import './main.html';

Template.links.helpers({
  preProductionLink: 'http://google.com',
  productionLink: 'http://freecodecamp.com'
})
