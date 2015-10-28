import Backbone from 'backbone';

let instructorModel = Backbone.Model.extend({
  
  urlRoot: 'https://api.parse.com/1/classes/contacts',

  idAttribute: 'objectId'

});

export default instructorModel;