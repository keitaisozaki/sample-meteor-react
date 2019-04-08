import { Meteor } from 'meteor/meteor';
import { Todos } from '../collections.js';

if(Meteor.isServer){
  Meteor.publish('getTodos', function(){
     return Todos.find({});
  });
}