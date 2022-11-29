import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Buyers = () => {

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
            <h3 className='text-2xl font-bold text-center mb-6'>Total Buyers: {buyers.length}</h3>
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
                            buyers.map((buyer,i )=><tr key={buyer._id}>
                                <th>{i+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button className='btn btn-primary'>Delete</button></td>
                              </tr>)
                        }
                      </tbody>
                    </table>
            </div>
        </div>
    );
};

export default Buyers;