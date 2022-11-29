import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Sellers = () => {

    const url = `http://localhost:5000/users?role=Seller`;

    const {data: sellers =[]} = useQuery({
        queryKey:['Sellers'],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <h3 className='text-2xl font-bold text-center mb-6'>Total Sellers: {sellers.length}</h3>
            <div>
            <table className="table w-full">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            sellers.map((seller,i )=><tr key={seller._id}>
                                <th>{i+1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-primary'>Delete</button></td>
                              </tr>)
                        }
                      </tbody>
                    </table>
            </div>
        </div>
    );
};

export default Sellers;