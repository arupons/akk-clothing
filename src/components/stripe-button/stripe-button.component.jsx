import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKay = 'pk_test_51IB47nJGz2NLcQzLzdMIziR6HWmkVazaUksRXSHoDahyJGiLAExqoGYTrfsBHPf1K3watKnCz97w4crpXiNFkyKK00v5dqfexL';
    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
            label='Pay now'
            name='Akk Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKay}
        />
    )
}

export default StripeCheckoutButton;