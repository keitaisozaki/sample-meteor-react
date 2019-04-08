import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Top from '../ui/pages/Top.jsx';
import AnotherPage from '../ui/pages/AnotherPage.jsx';

export default class RouteApp extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Top}/>
          <Route exact path="/another" component={AnotherPage}/>
        </Switch>
      </Router>
    )
  }
}