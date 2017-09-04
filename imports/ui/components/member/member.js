import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

import './login.html';
import './register.html';

Template.login.events({
  'submit form'(event) {
    event.preventDefault();
    var usernameVar = event.target.loginUsername.value;
    var passwordVar = event.target.loginPassword.value;

    Meteor.loginWithPassword(usernameVar, passwordVar);

  }
})
Template.register.events({
  'submit form'(event) {
    event.preventDefault();

    var usernameVar = event.target.registerUsername.value;
    var passwordVar = event.target.registerPassword.value;
    var passwordConfirmVar = event.target.registerPasswordConfirm.value;


    if(passwordVar != passwordConfirmVar) {
      console.log("Error")
    } else {

      Accounts.createUser({
        username: usernameVar,
        password: passwordVar,
      });
    }

  }
})
