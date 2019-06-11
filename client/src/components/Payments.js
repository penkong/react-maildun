// Stripe
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    // token is callback function bring us whole info of buyer
    // we post token with action creator to api server
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token=>this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
        dataName="screenshot"
      >
        <button className="f6 f5-l br4 white bg-green no-underline washed-green ba b--green grow pv2 ph3 dib"> Add Credits </button>
      </StripeCheckout>
    );
  }
}

export default connect(null,actions)(Payments);