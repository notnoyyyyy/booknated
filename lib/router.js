FlowRouter.route('/', {
  name: 'homePage',

  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {header: 'header', main: 'books', footer: 'footer'})
  }
})

FlowRouter.route('/books/new', {
  name: 'newBook',
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {header: 'header', main: 'newBook', footer: 'footer'})
  }
})
FlowRouter.route('/books/:bookId', {
  name: 'bookDetail',
  // subscriptions: function(params, queryParams) {
  //   this.register('books', Meteor.subscribe('Books', params.bookId));
  // },
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {header: 'header', main: 'bookDetail', footer: 'footer'})
  }
})
FlowRouter.route('/login', {
  name: 'login',
  // subscriptions: function(params, queryParams) {
  //   this.register('books', Meteor.subscribe('Books', params.bookId));
  // },
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {header: 'header', main: 'login', footer: 'footer'})
  }
})
FlowRouter.route('/register', {
  name: 'register',
  // subscriptions: function(params, queryParams) {
  //   this.register('books', Meteor.subscribe('Books', params.bookId));
  // },
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {header: 'header', main: 'register', footer: 'footer'})
  }
})
FlowRouter.route('/member/:username/books', {
  name: 'memberBooks',
  // subscriptions: function(params, queryParams) {
  //   this.register('books', Meteor.subscribe('Books', params.bookId));
  // },
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {header: 'header', main: 'memberBooks', footer: 'footer'})
  }
})
