import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './navigationBar.html';

Template.navigationBar.events({
  'click .logout'(event) {
    event.preventDefault();
    Meteor.logout();
    FlowRouter.go('homePage');
  }
})
