FlowRouter.route('/', {
  name: 'homePage',
  subscriptions: function(params, queryParams) {
    this.register('books', Meteor.subscribe('Books'))
  },
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {header: 'header', main: 'main', footer: 'footer'})
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
