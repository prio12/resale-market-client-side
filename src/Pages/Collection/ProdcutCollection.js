import { useQuery } from '@tanstack/react-query';
import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayPhoneData from '../DisplayPhoneData/DisplayPhoneData/DisplayPhoneData';

const ProdcutCollection = () => {
    const phoneCollectionData = useLoaderData()
    return (
        <div>
            <h1 className='text-3xl text-center'>Hello</h1>
            <div className='grid my-5 gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                {
                    phoneCollectionData.map(data =><DisplayPhoneData
                    key={data._id}
                    data={data}
                    ></DisplayPhoneData>)
                }
            </div>
        </div>
    );
};

export default ProdcutCollection;