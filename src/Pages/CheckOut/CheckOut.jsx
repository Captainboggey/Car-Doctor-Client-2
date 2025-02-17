import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const itemInfo =useLoaderData() 
    const {title,img,price}=itemInfo
    const handleOrder = e =>{
        e.preventDefault()
        const form = e.target;
        const first = form.first.value;
        const last =form.last.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const orderInfo = {
            User: first,last,phone,email,message,
            title: title,
            img: img,
            price: price
            
        }
        fetch("http://localhost:5000/bookings",{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
       

    }
    return (
        <div>
       <div className='w-48 mx-auto'>
       <button className='text-center btn p-2 tab '>Home/Checkout</button>
       </div>
       <form onSubmit={handleOrder}>
        <div className='grid  lg:grid-cols-2 gap-10 bg-base-200 lg:w-full p-10 lg:p-20'>
        <div className='form-control'>
           
           <input type="text" placeholder='First Name' name='first' className='input input-bordered'/>
         </div>
        <div className='form-control'>
           
           <input type="text" placeholder='Last name' name='last' className='input input-bordered'/>
         </div>
        <div className='form-control'>
          
           <input type="text" placeholder='Your Phone' name='phone' className='input input-bordered'/>
         </div>
        <div className='form-control'>
          
           <input type="email" required placeholder='Your Email' name='email' className='input input-bordered'/>
         </div>
        <div className='form-control md:col-span-2 '>
           
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