import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyBookings = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const {data: bookings = []} = useQuery({
        queryKey:['bookings', user?.email],
        queryFn:async () =>{
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            return data;
        }
    })
  return (
    <div>
      <h3 className="text-2xl font-bold text-center">Your bookings!!</h3>
      <div className='grid gap-2 my-20  grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      {
        bookings.map(booking =><div key={booking._id}>
            <div className="card shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={booking.bookingItemImage}
                  alt="Shoes"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{booking.bookingItem}</h2>
                <p className="text-white">Price: {booking.productPrice}</p>
                <div className="card-actions">
                  {
                    !booking.paid && 
                    <Link to={`/dashboard/payment${booking._id}`}><button className="btn btn-info">Pay Now</button></Link>
                  }
                  {
                    booking.paid && <span>Paid</span>
                  }
                </div>
              </div>
            </div>
          </div>)
      }
      </div>
    </div>
  );
};

export default MyBookings;
