import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({data}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('')
    const [clientSecret,setClientSecret] = useState('');
    const price = data.productPrice;
    const name = data.userName;
    const email = data.email;


    useEffect(() =>{
        fetch('https://resale-server-side-seven.vercel.app/create-payment-intent', {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(price)
        })
        .then(res =>res.json())
        .then(data =>setClientSecret(data.clientSecret))
    },[price])

    const handleSubmit = async(event) =>{
        event.preventDefault()
        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log(error)
            setCardError(error.message)
        }
        else{
            setCardError('')
        }
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card:card,
                    billing_details: {
                        name:name,
                        email:email,
                    },
                },
            },
        );
        if(confirmError){
            setCardError(confirmError.message);
            return;
        }
        console.log('payment',paymentIntent);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#FF0000',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-outline-red mt-3' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
       <p className='text-center text-red-700 font-bold'>{cardError}</p>
        </div>
    );
};

export default CheckoutForm;