import { Template } from 'meteor/templating';

import './login.html';
import './register.html';

Template.login.events({
  'submit form'(event) {
    event.preventDefault();
    console.log("Submitted !")
  }
})
Template.register.events({
  'submit form'(event) {
    event.preventDefault();
    console.log("Submitted !")
  }
})
