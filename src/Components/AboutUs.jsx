import React from 'react';
import about1 from "../../public/images/about_us/parts.jpg"
import about2 from "../../public/images/about_us/person.jpg"

const AboutUs = () => {
    return (
        <div className='grid grid-cols-4 gap-8 mt-10'>
            {/* img */}
            <div className='col-span-2 relative'>
                <img src={about2} alt="" className='lg:w-2/3 ' />
                <img src={about1} alt="" className='lg:w-1/2  lg:absolute right-1 top-44 border-8 border-white' />

            </div>
            <div className='col-span-2'>
                <h2 className='text-orange-600 font-bold'>About Us</h2>
                <h1 className='mt-5 font-bold text-black text-4xl'>We are qualified <br /> & of experience <br /> in this field</h1>
                <p className='mt-5'>There are many variations of passages of Lorem Ipsum <br />
                 available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable. </p>
                <p className='mt-5'>the majority have suffered alteration in some form, by injected  <br />humour, or randomised words which don't look even slightly <br /> believable. </p>
              <button className='btn btn-primary border-none mt-2 btn-warning bg-orange-600 text-white'>Explore More</button>
            </div>

        </div>
    );
};

export default AboutUs;