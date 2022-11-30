import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const Sellers = () => {

    const url = `https://resale-server-side-seven.vercel.app/users?role=Seller`;

    const {data: sellers =[],refetch} = useQuery({
        queryKey:['Sellers'],
        queryFn: async () =>{
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    const handleDelete = id =>{
      const agree = window.confirm('Are u sure u wanna delete this seller?')
      if(agree){
          fetch(`https://resale-server-side-seven.vercel.app/seller/delete/${id}`,{
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
                                <td><button onClick={() => handleDelete(seller._id)} className='btn btn-primary'>Delete</button></td>
                              </tr>)
                        }
                      </tbody>
                    </table>
            </div>
        </div>
    );
};

export default Sellers;