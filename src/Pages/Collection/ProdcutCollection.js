import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayPhoneData from '../DisplayPhoneData/DisplayPhoneData/DisplayPhoneData';
import BookingModal from './BookingModal/BookingModal';

const ProdcutCollection = () => {
    const phoneCollectionData = useLoaderData()
    const [bookingItem,setBookingItem] = useState([null])
    return (
        <div>
            <h1 className='text-3xl  text-center py-12'>Available Products on this Category</h1>
            <div className='grid my-5 gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    phoneCollectionData.map(data =><DisplayPhoneData
                    key={data._id}
                    data={data}
                    setBookingItem = {setBookingItem}
                    ></DisplayPhoneData>)
                }
            </div>
            {   bookingItem &&
                <BookingModal
                bookingItem={bookingItem}
                ></BookingModal>
            }
        </div>
    );
};

export default ProdcutCollection;