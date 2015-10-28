import Backbone from 'backbone';
import $ from 'jquery';

import contactsCollection from './contacts_collection';

import contactsTemplate from './views/contacts';
import instructorTemplate from './views/instructor';

// Call extend method with constructor function
let Router = Backbone.Router.extend({
  // Routes & functions called when routes triggered
  routes: {
    // Default route ""
    "" : "redirectToContacts",
    "contacts" : "showContacts",
    "instructor/:id" : "showSpecificInstructor"
  },
  // Initialize method on Router & automatically runs
  initialize: function(appElement) {
    // 'this' instance of router
    this.$el = appElement;
    console.log(appElement);

    this.contacts = new contactsCollection();

    let router = this;

    // Create click event for contact list
    // this.$el.on('click', '.instructor-list-item', function(event) {
      this.$el.on('click', '.instructor-list-item', (event) => {
      let $li = $(event.currentTarget);

      let instructorId = $li.data('instructor-id');
      this.navigate(`instructor/${instructorId}`, {trigger: true}); //* Navigate instructor 
      this.showSpecificInstructor(instructorId);
    });
    // Click event for back button
    this.$el.on('click', '.back-button', (event) => {
      let $button = $(event.currentTarget);
      let route = $button.data('to');
      this.navigate(route, {trigger: true});
     });

  },

  redirectToContacts: function() {
    this.navigate('contacts', {
      replace: true,
      trigger: true
    });
  },

  showContacts: function() {
    console.log('show contacts page');

    this.showSpinner();

    let router = this;
    // this.contacts.fetch().then(function() {
      // router.$el.html( contactsTemplate(router.contacts.toJSON()) );
      this.contacts.fetch().then(() => {
         this.$el.html( 
          contactsTemplate(
            this.contacts.toJSON()
            ) 
          );
    });

  },

  showSpinner: function() {
    this.$el.html(
      '<i class="fa fa-spinner fa-spin"></i>'
    );

  },

  showSpecificInstructor: function(instructorId) {
    console.log('show instructor page');
    let instructor = this.contacts.get(instructorId);

    if (instructor) {
      // Contacts have fetched & grabbed one you want
      this.$el.html( 
        instructorTemplate(instructor.toJSON()
          ) 
        );
    } else { 
      // Contacts not fectched so we need to load one you want
      let router = this;
      instructor = this.contacts.add({objectId: instructorId});
      this.showSpinner();

      instructor.fetch().then(function() {
        router.$el.html( 
          instructorTemplate(instructor.toJSON()
            ) 
          );
      });
    }

  },

  // Starts set interval by checking url
  start: function() {
    Backbone.history.start();
    // Chain method of router
    return this;
  }

});

export default Router;