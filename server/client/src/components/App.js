import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

import { connect } from 'react-redux';
import { fetchUser } from '../actions';



class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>            
            {/* <Route path="/" exact component={Landing}/>
            <Route path="/surveys" exact component={Dashboard}/>
            <Route path="/surveys/new" exact component={SurveyNew}/>
            <Route path="/" exact component={Landing}/> */}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

// // const mapStateToProps = state => {
//   return { auth: state.auth };
// }


export default connect(null, {fetchUser})(App);

