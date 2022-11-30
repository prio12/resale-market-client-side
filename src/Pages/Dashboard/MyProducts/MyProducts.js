import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/collection?email=${user?.email}`

    const {data: products = []} = useQuery({
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
            <h3 className='text-2xl font-bold text-center my-10'>Your Products {products.length}</h3>
        </div>
    );
};

export default MyProducts;