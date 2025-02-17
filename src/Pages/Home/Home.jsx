import React from 'react';
import Banner from '../../Components/Banner';
import AboutUs from '../../Components/AboutUs';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../../Components/ServiceCard';

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
         <Banner></Banner>
         <AboutUs></AboutUs>
         <h2 className="text-center text-orange-600 mt-40 font-bold">Service</h2>
         <h1 className="text-3xl text-center font-bold mt-2">Our Service Area</h1>
         <p className='text-center mt-2'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        
       <div className='mt-10 mx-auto grid lg:grid-cols-3 gap-4'>
       {
            services.map(service=><ServiceCard service={service} key={service._id}></ServiceCard>)
        }
       </div>
      
        </div>
        
    );
};

export default Home;