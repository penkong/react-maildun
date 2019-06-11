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
          <div className="f6 f4-m f3-l fw2 normal-l b br-pill ba bg-white hover-bg-navy b--navy no-underline grow pv2 ph3 dib mr2 mr3-l"><a className="link navy hover-white" href="/auth/google">Login with Google</a></div>
        );
      default:
        return [
          <span className="mr2 mr3-l" key="1"><Payments/></span>,
          <span className="f6 f5-l br-pill navy bg-white no-underline ba b--navy grow pv2 ph3 dib mr2 mr3-l" key="3">Credits {this.props.auth.credits}</span>,
          <span className="f6 f5-l br-pill white no-underline ba grow pv2 ph3 dib" key="2"><a className="link red" href="/api/logout">Logout</a></span>,
        ];
    }
  }  
  render() {
    return (
      <nav className="helvetica w-100 center cf bg-navy pa2">
          <Link to={this.props.auth ? '/surveys' : '/'} 
          className="fl w-100 w-40-l georgia white f1 b f-subheadline-l ttu tracked-tight bn tc tl-l link mb1 ml4-l">MAILDUN</Link>
          <div className="fl fr-l w-100 w-40-l tc tr-l mr4-l mt4-l mv2">
            {this.renderContent()}
          </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ auth }) => { return { auth }};

export default connect(mapStateToProps)(Header);