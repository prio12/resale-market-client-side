import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Buyers = () => {

    // const {data: bookings = []} = useQuery({
    //     queryKey:['bookings', user?.email],
    //     queryFn:async () =>{
    //         const res = await fetch(url, {
    //           headers:{
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //           }
    //         });
    //         const data = await res.json();
    //         console.log(data)
    //         return data;
    //     }
    // })

    const url = `http://localhost:5000/users?role=Buyer`;

    const {data: buyers =[]} = useQuery({
        queryKey:['Buyers'],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3>buyers{buyers.length}</h3>
        </div>
    );
};

export default Buyers;