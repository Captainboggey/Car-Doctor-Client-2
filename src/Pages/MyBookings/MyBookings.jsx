import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingsTable from '../../Components/BookingsTable';

const MyBookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])
    const url = `http://localhost:5000/bookings?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    },[])

    const handleDelete = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                const remaining = bookings.filter(booking=> booking._id !== id)
                setBookings(remaining)
            }
        })
    }

    const handleUpdate=(id) =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: "PATCH",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
               const remaining = bookings.filter(booking=>booking._id !== id) 
               const updated = bookings.find(booking=>booking._id===id)
               updated.status = 'confirm'
               const newBookings =[updated,...remaining ]
               setBookings(newBookings)
            }
        })
    }
    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    
    <tbody>
      {/* row 1 */}
     {
        bookings.map(booking=><BookingsTable handleUpdate={handleUpdate} handleDelete={handleDelete} booking={booking} key={booking._id}></BookingsTable>)
     }
      {/* row 2 */}
   
    
   
      
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
    );
};

export default MyBookings;