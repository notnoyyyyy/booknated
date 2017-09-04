import { Template } from 'meteor/templating';

import { Books } from '../../../api/books.js';

import './book.html';

Template.books.onCreated(function booksOnCreated() {
  Meteor.subscribe('books');
})

Template.books.helpers({
  books() {
    return Books.find( {}, {sort: { createdAt: -1}} );
  },
  bookCount() {
    return Books.find({ donate: { $ne: !false } }).count();
  },
  errorMessage() {
    return Session.get("errorMessage");
  }
})

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
  }
})

Template.bookDetail.helpers({
  'book'() {
    return Books.findOne({_id: FlowRouter.getParam('bookId')});
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
