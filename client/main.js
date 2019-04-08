import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import RouteApp from '../imports/router/RouteApp.jsx';
 
Meteor.startup(() => {
  render(<RouteApp />, document.getElementById('render-target'));
});