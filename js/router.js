import Backbone from 'backbone';
import $ from 'jquery';

import contactsCollection from './contacts_collection';

import contactsTemplate from './views/contacts';
import instructorTemplate from './views/instructor';

// Call extend method
let Router = Backbone.Router.extend({
  // Routes & functions called when routes triggered
  routes: {
    // "" : "home",
    "" : "contacts",
    "contacts/:id" : "showSpecificInstructor"
  },

  initialize: function(appElement) {
    this.$el = appElement;
    // console.log(appElement);

    this.contacts = new contactsCollection();

    let router = this;

    // Create on click event function
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
      let instructor = this.contacts.add({objectId: instructorId});
      this.showSpinner();
      instructor.fetch().then(function() {
        router.$el.html( instructorTemplate(instructor.toJSON()) );
      });
    }

  },

  contacts: function() {
    console.log('show contacts page');

    this.showSpinner();

    let router = this;

    this.contacts.fetch().then(function() {

      router.$el.html( contactsTemplate(router.contacts.toJSON()) );

    });
  },


  start: function() {
    Backbone.history.start();
  }


});

export default Router;