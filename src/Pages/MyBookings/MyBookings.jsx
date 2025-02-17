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
    return (
        <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    
    <tbody>
      {/* row 1 */}
     {
        bookings.map(booking=><BookingsTable handleDelete={handleDelete} booking={booking} key={booking._id}></BookingsTable>)
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