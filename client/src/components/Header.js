/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Payments from './Payments';

const styles = {
  nav: 'w-100 center cf bg-navy pa2',
  navLogo: 'fl w-100 w-40-l tc tl-l f1 b f-subheadline-l ttu tracked-tight white bn link mb1 ml4-l',
  rightButtons: 'w-100 w-40-l fl fr-l tc tr-l mr4-l mt4-l mv2',
  loginWithG: 'dib f6 f4-m f3-l fw2 normal-l b bg-white hover-bg-navy ba br-pill b--navy no-underline grow mr2 mr3-l pv2 ph3',
  loginWithGLink: 'navy hover-white link',
  payment: 'mr2 mr3-l',
  credits: 'dib f6 f5-l navy bg-white ba br-pill b--navy no-underline grow mr2 mr3-l pv2 ph3',
  logout: 'dib f6 f5-l white ba br-pill no-underline grow pv2 ph3',
  logoutLink: 'red link'
};

class Header extends Component {
  forceUpdateHandler = () => {
    this.forceUpdate();
  };
  renderContent(){
    switch (this.props.auth) {
      case null:
        return; 
      case false:
        return (
          <div className={styles.loginWithG}>
            <a className={styles.loginWithGLink} href="/auth/google" onClick={this.forceUpdateHandler}>
              Login with Google
            </a>
          </div>
        );
      default:
        return [
          <span className={styles.payment} key="1"><Payments/></span>,
          <span className={styles.credits} key="3">Credits {this.props.auth.credits}</span>,
          <span className={styles.logout} key="2">
            <a className={styles.logoutLink} href="/api/logout" onClick={this.forceUpdateHandler}>Logout</a>
          </span>,
        ];
    }
  }  
  
  render() {
    return (
      <nav className={styles.nav} style={{fontFamily:"Kanit"}}>
          <Link to={this.props.auth ? '/surveys' : '/'} className={styles.navLogo}>
            MAILDUN
          </Link>
          <div className={styles.rightButtons}>
            {this.renderContent()}
          </div>
      </nav>
    );
  }
}
const mapStateToProps = ({ auth }) => { return { auth }};

export default connect(mapStateToProps,actions)(Header);

// componentDidUpdate() {
//   this.props.fetchUser();
// }
// componentDidMount() {
//   this.props.fetchUser(this.props.auth);
//   this.forceUpdateHandler();
// }