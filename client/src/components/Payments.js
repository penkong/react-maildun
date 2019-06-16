// Stripe
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = {
  buttonStripe: 'dib f6 f5-l white bg-green ba br4 b--green no-underline grow pv2 ph3'
};

class Payments extends Component {
  render() {
    // token is callback function bring us whole info of buyer
    // we post token with action creator to api server
    return (
      <StripeCheckout
        name="MAILDUN"
        description="$5 to add up 5 credits"
        amount={500}
        locale='auto'
        token={token=>this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
        dataName="screenshot"
      >
        <button className={styles.buttonStripe}> Add Credits </button>
      </StripeCheckout>
    );
  }
}

export default connect(null,actions)(Payments);