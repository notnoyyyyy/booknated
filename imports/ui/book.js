import { Template } from 'meteor/templating';

import { Books } from '../api/books.js';

import './book.html';

Template.book.helpers({
  formatDate() {
    return moment(this.createdAt).format('MMMM Do YYYY, h:mm:ss a');
  },
  donateNow() {
    if (this.donate === false) {
      return "Donate"
    } else {
      return "Donated"
    }
  },
  sameUser() {
    if (Meteor.userId() != this.owner) {
      return false
    } else {
      return true
    }
  },
  baseDir() {
    console.log('~/public/');
  }
})
Template.book.events({
  'click .delete'() {
    Meteor.call('books.remove', this._id);
  },
  'click .donate'() {
    if (Meteor.userId() != this.owner) {
      if( Meteor.userId()) {
        Meteor.call('books.donated', this._id, ! this.donate, function(error) {
          if (error && error.error === "this-not-donated") {
            Session.set("errorMessage", "Please login another userId");
          }
        });
      } else {
        console.log("please login");
      }
    } else if (Meteor.userId() === null) {
      throw new Meteor.Error("this-not-donated");
    }
    console.log(this.owner + " : " + Meteor.userId());
    console.log(this.owner == Meteor.userId());
    // Meteor.call('books.donated', this._id, ! this.donate);
  },

});


Template.newBook.events({
  'submit .new-book'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title.value;
    const description = target.description.value;

    Meteor.call('books.insert', title, description);

    target.title.value = "";
    target.description.value = "";
    FlowRouter.go('homePage');
  }
})
// Template.registerHelper('truncate', function(passedString, num) {
//     var fooText = passedString.substring(0,40); //same as truncate.
//     if (fooText < 40) {
//       return
//
//     } else {
//
//       return new Spacebars.SafeString(fooText) + " ..."
//     }
// });
