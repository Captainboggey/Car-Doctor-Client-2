import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, _id, title, price } = service;
    return (
        <div className="card bg-base-100 lg:w-96 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-red-600'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary border-none text-black bg-pink-400">Book Now </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;