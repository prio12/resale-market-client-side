import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import './Payment.css'

const stripePromise = loadStripe(
  "pk_test_51M9qoODN6CchKu58qz1DcSjnuWS9q5jy5kH3YM0woy4bV9wpnd9tzkTEZIJMuxmZNLZ6dtu2ESKEX7HzLXgOMUsH00Rvnms3fQ"
);

const Payment = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="payment p-10">
      <h2 className="text-2xl text-black my-6 text-center font-bold">
        Payment for {data.bookingItem}
      </h2>
      <p className="text-xl text-black text-center">
        Please pay <strong>$ {data.productPrice}</strong> for {data.bookingItem}
      </p>
      <div className="my-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm
          data={data}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
