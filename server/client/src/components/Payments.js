// Stripe
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


class Payments extends Component {
  render() {
    // token is callback function
    return (
      <StripeCheckout
        amount={500}
        token={token=>console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
      />
    );
  }
}

export default Payments;