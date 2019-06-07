/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';

class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return; 
      case false:
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        return [
          <li key="1"><Payments/></li>,
          <li key="2"><a href="/api/logout">Logout</a></li>,
        ];
    }
  }  
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} 
          className="left brand-logo">FUll Email</Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ auth }) => { return { auth }};

export default connect(mapStateToProps)(Header);