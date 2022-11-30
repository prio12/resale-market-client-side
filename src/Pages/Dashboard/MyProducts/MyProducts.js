import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const [advertise,setAdvertise] = useState(true)
    const url = `http://localhost:5000/collection?email=${user?.email}`

    const {data: products = [],refetch} = useQuery({
        queryKey:['bookings', user?.email],
        queryFn:async () =>{
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            return data;
        }
    })

    const handleDelete = id =>{
        const agree = window.confirm('Are u sure u wanna delete this product?')
        if(agree){
            fetch(`http://localhost:5000/collection/delete/${id}`,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                if(data.deletedCount > 0){
                    toast.success('deleted successfully')
                    refetch()
                }
            })
        }
    }
    const handleAdvertise = id =>{
        fetch(`http://localhost:5000/collection/advertise/${id}`,{
            method:"PUT"
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Successfully advertised')
                setAdvertise(false)
            }
        })
    }
    return (
        <div>
            <h3 className='text-2xl font-bold text-center my-10'>Your Products {products.length}</h3>
            <div>
                {
                    products.map(product =><div key={product._id} className="card shadow-xl">
                    <figure><img src={product.image} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                      <h2 className="text-2xl font-bold text-center">
                       {product.name}
                      </h2>
                      <p>Sales Status :</p>
                      <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(product._id)} className='btn btn-outline'>Delete</button>
                        {
                            advertise ?<>
                            <button onClick={() => handleAdvertise(product._id)}  className='btn btn-outline'>Advertise</button>
                            </>:
                            <>
                            <button  className='btn btn-disabled'>Advertise</button>
                            </>
                        }
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default MyProducts;