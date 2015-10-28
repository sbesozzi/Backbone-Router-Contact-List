import Backbone from 'backbone';
import instructorModel from './instructor_model';

let contactsCollection = Backbone.Collection.extend({

  urlRoot: 'https://api.parse.com/1/classes/contacts',

  model: instructorModel,

  parse: function(data) {
    return data.results;
  }

});

export default contactsCollection;