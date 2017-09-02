import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Books } from '../api/books.js';

import './book.js';
import './body.html';

Template.body.helpers({
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
Template.body.events({

  'submit .new-book'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title.value;
    const description = target.description.value;

    Meteor.call('books.insert', title, description);

    target.title.value = "";
    target.description.value = "";
  }
})