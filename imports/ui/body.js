import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Books } from '../api/books.js';

import './components/books/book.js';
import './components/users/user.js';
import './body.html';

// Import partials
import './partials.js';

Template.body.onCreated(function bodyOnCreated() {
  Meteor.subscribe('books');
})


Template.main.helpers({
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
