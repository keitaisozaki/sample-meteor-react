import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Todos } from './collections.js';

Meteor.methods({
  'addTodo'(content){
    var todo = {
      date:new Date(),
      content:content
    };
    Todos.insert(todo);
  },
})