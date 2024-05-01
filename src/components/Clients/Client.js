import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Client = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
  return (
   <section id='clients'>
     <div className='w-[80%] sm:w-[90%] h-[100%] m-auto -mt-14'>
        <div className='mt-20'>
        <Slider {...settings}>
            {data.map((d) => {
                return (
                    <div className='bg-indigo-200 h-[450px] md:h-[500px] lg:h-[450px] text-black rounded-xl'>
                        <div className='img bg-gradient-to-l from-indigo-300 to-blue-600 rounded-xl pb-8'>
                            <img src={d.img} alt='' className='h-44 w-44 mx-auto pt-5 rounded-full'/>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-4 p-4'>
                        <p className='text-xl font-semibold'>{d.name}</p> 
                        <p className='text-center'>{d.review}</p> 
                        <button className='bg-indigo-300 hover:transition ease-in-out delay-100 hover:scale-110 duration-300 text-indigo-800 text-lg px-6 py-1 rounded-xl'>READ-MORE</button>
                        </div>
                    </div>
                )
            })}
        </Slider>    
        </div>
    </div>

    <div id='contact' className='w-[50%] mx-auto mt-10'>
        <h1 className=' contactPageTitle font-bold text-2xl text-center text-yellow-600'>Contact Me</h1>
        <h1 className='contactDesc text-base font-light text-center'>Please fill out the form below to discuss any work opportunitis.</h1>
        <form className='contactForm my-[1rem] flex flex-col items-center justify-center'>
            <input type='text' className='name' placeholder='Your Name..' />
            <input type='email' className='email' placeholder='Your Email..' />
            <textarea className='msg' name='message'rows='5' placeholder='Your Message...'></textarea>
            <button type='submit' value='send' className='submitBtn bg-yellow-500 hover:transition ease-in-out delay-150 hover:scale-110 duration-300 border-none py-[0.75rem] px-[3.5rem] rounded-full m-[2rem]'>Submit</button>
        </form>
    </div>
   </section>
  )
}

const data = [
    
    {
        name: `Mr Tunde Ola`,
        img: `/assets/myself.jpg`,
        review: ` I take pride in paying attention to the smallest details and making sure that my work is programatically perfect.`
    },
    {
        name: `Mr Davide Ghost`,
        img: `/assets/myself.jpg`,
        review: ` I take pride in paying  attention to the smallest details and making sure that my work is programatically perfect.`
    },
    {
        name: `Mr Afo Afolabi`,
        img: `/assets/myself.jpg`,
        review: ` I take pride in paying attention to the smallest details and making sure that my work is programatically perfect.`
    },
    {
        name: `Mr Tunde`,
        img: `/assets/myself.jpg`,
        review: ` I take pride in paying attention to the smallest details and making sure that my work is programatically perfect.`
    },
    {
        name: `Mr Tunde`,
        img: `/assets/myself.jpg`,
        review: ` I take pride in paying attention to the smallest details and making sure that my work is programatically perfect.`
    },
    {
        name: `Mr Tunde`,
        img: `/assets/myself.jpg`,
        review: ` I take pride in paying attention to the smallest details and making sure that my work is programatically perfect.`
    },
    {
        name: `Mr Tunde`,
        img: `/assets/myself.jpg`,
        review: ` I take pride in paying attention to the smallest details and making sure that my work is programatically perfect.`
    },
]
