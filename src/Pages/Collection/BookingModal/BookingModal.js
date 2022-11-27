import React from "react";

const BookingModal = ({bookingItem}) => {

    const handleBooking = event =>{
        event.preventDefault();
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
         <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
         <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
         <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
         <input type="text" placeholder="Type here" className="input input-bordered input-info w-full" />
         <input type="submit" value="Submit" className="btn btn-accent w-full" />
         </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
