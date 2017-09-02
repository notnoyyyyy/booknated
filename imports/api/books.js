import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Books = new Mongo.Collection('books');

if (Meteor.isServer) {
  Meteor.publish('books', function booksPublication() {
    return Books.find();
  })
}

Meteor.methods({
  'books.insert'(title, description) {
    check(title, String)
    check(description, String)

    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Books.insert({
      title,
      description,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'books.remove'(bookId) {
    check(bookId, String);
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Books.remove(bookId);
  },
  'books.donated'(bookId, setDonated) {
    check(bookId, String);
    check(setDonated, Boolean);

    Books.update(bookId, { $set: { donate: setDonated } });
  }
})
