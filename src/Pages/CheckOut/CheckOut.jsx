import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const itemInfo =useLoaderData() 
    console.log(itemInfo)
    return (
        <div>
       <div className='w-48 mx-auto'>
       <button className='text-center btn p-2 tab '>Home/Checkout</button>
       </div>
       <form>
        <div className='grid  lg:grid-cols-2 gap-10 bg-base-200 lg:w-full p-10 lg:p-20'>
        <div className='form-control'>
           
           <input type="text" placeholder='First Name' name='first' className='input input-bordered'/>
         </div>
        <div className='form-control'>
           
           <input type="text" placeholder='Last name' name='last' className='input input-bordered'/>
         </div>
        <div className='form-control'>
          
           <input type="text" placeholder='Your Phone' name='name' className='input input-bordered'/>
         </div>
        <div className='form-control'>
          
           <input type="email" required placeholder='Your Email' name='email' className='input input-bordered'/>
         </div>
        <div className='form-control md:col-span-2 '>
           <label><span className='label-text'>Name:</span> </label>
           <input type="text" placeholder='Your Message' name='message' className='input input-bordered lg:h-44'/>
         </div>
        <div className='form-control md:col-span-2'>
          
           <input type="submit" value="Order Confirm" name='name' className='bg-orange-600 text-white btn'/>
         </div>
        </div>

       </form>
            
        </div>
    );
};

export default CheckOut;