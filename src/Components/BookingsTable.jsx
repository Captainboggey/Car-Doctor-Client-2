import React from 'react';

const BookingsTable = ({booking,handleDelete}) => {
    const {img,price,title,_id}=booking
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
           <button className="btn btn-ghost btn-xs">Confirm</button>
         </th>
       </tr>
    );
};

export default BookingsTable;