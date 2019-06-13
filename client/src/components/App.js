import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <div className="w-100 bg-near-white vh-100" style={{fontFamily: "Roboto"}} >
        <BrowserRouter>
          <div>
            <Header/>
            <Route path="/" exact component={Landing}/>
            <Route path="/surveys" exact component={Dashboard}/>
            <Route path="/surveys/new" exact component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);