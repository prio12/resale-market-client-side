import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddProducts = () => {
    const {
        register,handleSubmit,formState: { errors },} = useForm();
        const navigate = useNavigate()
        const imageHostKey = process.env.REACT_APP_imagebb_key;
        const {user} =useContext(AuthContext)
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const handleAddProduct = (data) =>{
            const image = data.image[0];
            const formData = new FormData();
            const time = Date()
            formData.append('image',image);
            const url =`https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
            fetch(url,{
                method:"POST",
                body:formData
            })
            .then(res => res.json())
            .then(imgData =>{
                if(imgData.success){
                    console.log(imgData.data.url);
                    const addProduct ={
                        image:imgData.data.url,
                        category:data.category,
                        name:data.productName,
                        location:data.location,
                        resalePrice:data.resalePrice,
                        originalPrice:data.originalPrice,
                        used:data.used,
                        sellerName:sellerName,
                        email:sellerEmail,
                        time:time,
                    }
                    

                    fetch('http://localhost:5000/collection',{
                        method:"POSt",
                        headers:{
                            'content-type':"application/json"
                        },
                        body:JSON.stringify(addProduct)
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result)
                        toast.success('Product added successfully')
                        navigate('/dashboard/myProducts')
                    })
                }
            })
        }
    return (
        <div>
            <div className="h-[1000px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-3xl text-center mb-5">Add a Product</h2>
        <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Category</span>
            </label>
            <select {...register("category")} className="select select-bordered  w-full max-w-xs">
              <option disabled selected>
                Pick Product Category
              </option>
              <option>Realme</option>
              <option>Iphone</option>
              <option>Samsung</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product name</span>
            </label>
            <input
              type="text"
              {...register("productName", { required: "Name must be included" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.productName && <p className="text-red-600">Product name is required</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Original Price</span>
            </label>
            <input
              type="text"
              {...register("originalPrice", { required: "original price must be included" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.originalPrice && <p className="text-red-600">Price is required</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Resale Price</span>
            </label>
            <input
              type="text"
              {...register("resalePrice", { required: "resalePrice must be included" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.resalePrice && <p className="text-red-600">Price is required</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Condition</span>
            </label>
            <select {...register("condition")} className="select select-bordered  w-full max-w-xs">
              <option disabled selected>
                Pick Product Condition
              </option>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Year of use</span>
            </label>
            <input
              type="text"
              {...register("used", { required: "number must be included" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.number && <p className="text-red-600">Year of used is required</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Mobile Number</span>
            </label>
            <input
              type="text"
              {...register("number", { required: "number must be included" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.number && <p className="text-red-600">Mobile number is required</p>}
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              {...register("location", { required: "location must be included" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.location && <p className="text-red-600">location  is required</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product name</span>
            </label>
            <input
              type="file"
              {...register("image", { required: "Name must be included" })}
              className="input input-bordered w-full  max-w-xs"
            />
            {errors.image && <p className="text-red-600">Product image is required</p>}
          </div>
          <input className="btn mt-6 btn-info w-full" type="submit" />
        </form>
      </div>
    </div>
        </div>
    );
};

export default AddProducts;