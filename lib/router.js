FlowRouter.route('/', {
  name: 'homePage',
  subscriptions: function(params, queryParams) {
    this.register('books', Meteor.subscribe('Books'))
  },
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {header: 'header', main: 'main', footer: 'footer'})
  }
})
