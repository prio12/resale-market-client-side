import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({bookingItem,setBookingItem}) => {

  const {user} = useContext(AuthContext)

    const handleBooking = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const item = form.bookingItemName.value;
        const price = form.price.value;
        const number = form.number.value;
        const location = form.location.value;

        const booking = {

          userName:name,
          userEmail:email,
          bookingItem:item,
          bookingItemImage:bookingItem.image,
          productPrice:price,
          userNumber:number,
          userLocation:location
        }

        //sending booking data to db

        fetch('http://localhost:5000/bookings', {
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(booking)
        })

        .then(res => res.json())
        .then(data => {
          console.log(data);
          setBookingItem(null)
          toast.success("Booking Confirmed")
          
    
        })
    }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-center font-bold">
            You selected {bookingItem.name}!
          </h3>
         <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 mt-10">
         <input type="text" name="name" defaultValue={user?.displayName} disabled className="input input-bordered input-info w-full" />
         <input type="email" name="email" defaultValue={user?.email} disabled className="input input-bordered input-info w-full" />
         <input type="text" name="bookingItemName" defaultValue={bookingItem.name} disabled className="input input-bordered input-info w-full" />
         <input type="text" name="price" defaultValue={bookingItem.resalePrice} disabled className="input input-bordered input-info w-full" />
         <input type="text" name="number" placeholder="Enter your phone number"  className="input input-bordered input-info w-full" />
         <input type="text" name="location" placeholder="meeting location"  className="input input-bordered input-info w-full" />
         <input type="submit" value="Submit" className="btn btn-accent w-full" />
         </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
