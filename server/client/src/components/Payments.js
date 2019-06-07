// Stripe
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';


class Payments extends Component {
  render() {
    // token is callback function bring us whole info of buyer
    // we post token with action creator to api server
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token=>console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default Payments;