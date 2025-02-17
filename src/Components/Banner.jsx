import React from 'react';
import banner1 from "../../public/images/banner/1.jpg"
import banner2 from "../../public/images/banner/2.jpg"
import banner3 from "../../public/images/banner/3.jpg"
import banner4 from "../../public/images/banner/4.jpg"
import banner5 from "../../public/images/banner/5.jpg"
import banner6 from "../../public/images/banner/6.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
              
               <img
                    src={banner1}
                    className="w-full" />
                
                    
               
                
               <div className='absolute  top-0  text-white items-center w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]'>
               <h2 className='pt-40 pl-20 w-96 text-5xl '>Affordable Price For Car Servicing</h2>
               <p className=' pt-5 pl-20'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
               <div className='pl-20 pt-10 flex gap-3'>
                 <button className='btn btn-primary border-none btn-warning text-white bg-orange-700'>Discover More</button>
                 <button className='btn btn-primary text-white btn-warning border-white bg-transparent'>Latest Project</button>
               </div>
               </div>
                   
                  <div className="absolute  right-5 bottom-0 flex -translate-y-1/2 transform ">
                  <a href="#slide4" className="btn btn-circle">❮</a>
                  <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
             
               
               
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={banner2}
                    className="w-full" />
                     <div className='absolute  top-0  text-white items-center w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]'>
               <h2 className='pt-40 pl-20 w-96 text-5xl '>Affordable Price For Car Servicing</h2>
               <p className=' pt-5 pl-20'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
               <div className='pl-20 pt-10 flex gap-3'>
                 <button className='btn btn-primary border-none btn-warning text-white bg-orange-700'>Discover More</button>
                 <button className='btn btn-primary text-white btn-warning border-white bg-transparent'>Latest Project</button>
               </div>
               </div>
                <div className="absolute right-5 bottom-0 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={banner3}
                    className="w-full" />
                      <div className='absolute  top-0  text-white items-center w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]'>
               <h2 className='pt-40 pl-20 w-96 text-5xl '>Affordable Price For Car Servicing</h2>
               <p className=' pt-5 pl-20'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
               <div className='pl-20 pt-10 flex gap-3'>
                 <button className='btn btn-primary border-none btn-warning text-white bg-orange-700'>Discover More</button>
                 <button className='btn btn-primary text-white btn-warning border-white bg-transparent'>Latest Project</button>
               </div>
               </div>
                <div className="absolute right-5 bottom-0 flex -translate-y-1/2 transform justify-between">
                
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={banner4}
                    className="w-full" />
                      <div className='absolute  top-0  text-white items-center w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500]'>
               <h2 className='pt-40 pl-20 w-96 text-5xl '>Affordable Price For Car Servicing</h2>
               <p className=' pt-5 pl-20'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
               <div className='pl-20 pt-10 flex gap-3'>
                 <button className='btn btn-primary border-none btn-warning text-white bg-orange-700'>Discover More</button>
                 <button className='btn btn-primary text-white btn-warning border-white bg-transparent'>Latest Project</button>
               </div>
               </div>
                <div className="absolute right-5 bottom-0 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;