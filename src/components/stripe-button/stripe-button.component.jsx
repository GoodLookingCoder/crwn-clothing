import React from "react"
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51IYIU0Lk3xwurv55TEv7i5qJCVSXSIGM4ldKipgTXu5UziVEEt7AT0lNj0Rb3gzyrp5TX5SlprRifPsHhA5YGmxh00f5lkYhWD"

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
      };
    
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;