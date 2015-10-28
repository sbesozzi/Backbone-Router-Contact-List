import Backbone from 'backbone';
import $ from 'jquery';

import contactsCollection from './contacts_collection';

// import homeTemplate from './views/home';
import contactsTemplate from './views/contacts';
import instructorTemplate from './views/instructor';

// Call extend method
let Router = Backbone.Router.extend({
  // Routes & functions called when routes triggered
  routes: {
    // "" : "home",
    "" : "contacts",
    // "contacts" : "showContacts",
    "contacts/:id" : "showSpecificInstructor"
  },

  initialize: function(appElement) {
    console.log(appElement);
    this.$el = appElement;

    this.contacts = new contactsCollection();

    let router = this;

    this.$el.on('click', '.instructor-list-item', function(event) {
      let $li = $(event.currentTarget);
      var instructorId = $li.data('instructor-id');
      router.navigate(`contacts/${instructorId}`);
      router.showSpecificInstructor(instructorId);
    });
  },

  // home: function() {
  //   console.log('show home page');
  //   this.$el.html( homeTemplate() );
  // },

  contacts: function() {
    console.log('show contacts page');

    this.showSpinner();

    var router = this;

    this.contacts.fetch().then(function() {

      router.$el.html( contactsTemplate(router.contacts.toJSON()) );

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
      this.$el.html( instructorTemplate(instructor.toJSON()) );
    } else {
      let router = this;
      instructor = this.contacts.add({objectId: instructorId});
      this.showSpinner();
      instructor.fetch().then(function() {
        router.$el.html( instructorTemplate(instructor.toJSON()) );
      });
    }

  },

  

  start: function() {
    Backbone.history.start();
  }


});

export default Router;