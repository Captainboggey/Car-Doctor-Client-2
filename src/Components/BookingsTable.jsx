import React from 'react';

const BookingsTable = ({booking,handleDelete,handleUpdate}) => {
    const {img,price,title,_id,status}=booking
    return (
        <tr>
         <th>
          <button onClick={()=> handleDelete(_id)} className='btn btn-circle'>X</button>
         </th>
         <td>
           <div className="flex items-center gap-3">
             <div className="avatar">
               <div className="mask  h-24">
                 <img
                   src={img}
                   alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
             
           </div>
         </td>
         <td>
           {title}
           
         </td>
         <td>
            {price}
         </td>
         <th>
           {
            status==="confirm"?<h2 className='font-bold text-green-700' >Confirmed</h2>:<button onClick={()=>handleUpdate(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
           }
         </th>
       </tr>
    );
};

export default BookingsTable;