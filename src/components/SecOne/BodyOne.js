import React from 'react';
import './BodyOne.css';
import { Link } from 'react-scroll';

export const BodyOne = () => {
  return (
    <section id='BodyOne'>
      <div className='relative leading-[50px]'>
        <div className='introContent h-[100%] w-[250%] pt-[30%] sm:pt-0 sm:h-[100%] sm:w-[100vw] md:w-[160%] md:pt-[70%] py-[2rem] flex flex-col justify-center sm:text-[3rem] font-semibold'>
          <span className='hello sm:text-[1.75rem] font-[100px] hidden sm:flex lg:-mt-48 xl:-mt-[400px] 2xl:-mt-[45%]'>Hello,</span>
          <span className='introText sm:leading-[60px] pt-[10%]  sm:pt-0'>
            <span className='sm:hidden'>Hello,</span>I'm  
            <span className='introName text-yellow-400 ps-2'>Paul</span> <br/>
            <span className='hidden sm:flex web'>Web Developer</span>
          </span>
          <p className='introPara text-[14px] w-[40%] leading-8 lg:text-lg lg:leading-10 xl:w-[30%]'>I am a skilled and passionate Web Developer with experience in building a mavel web applications and user friendly interface <span className='text-yellow-500 text-[16px]'>UI.</span></p>
          <Link>
            <button class="bg-yellow-500 hover:bg-yellow-400 text-white font-medium text-lg py-1 px-5 hover:border-yellow-300 rounded-[32px]">
              Hire Me
            </button>
          </Link>
        </div>

        <div className='absolute sm:top-[20%] sm:right-96 z-10 sm:w-[25%] md:w-[50%] md:ps-[6%] md:-mt-10 md:text-xl md:leading-10 lg:text-2xl lg:leading-[50px] lg:w-[60%] xl:-mt-5 2xl:w-[35%] 2xl:text-[18px] 2xl:leading-10 leading-8'>
          <p className='animate-text bg-gradient-to-r from-white via-yellow-700 to-white bg-clip-text text-transparent font-black'><span className='text-yellow-500 font-semibold font-serif border-b-2 border-yellow-500'>Certification:</span>
           <br/>B.sc Information Techlonogy,Software Engineering,HTML,CSS And Javascript Certification,And a React Developer.</p>
        </div>

        <div className=''>
          <img src='./assets/myself.jpg' alt='author' className='author -mt-14 sm:mt-52 me-24 rounded-full w-[40%] sm:w-[20%] md:w-[40%] md:mt-0 md:me-5 lg:mt-10 xl:mt-0 2xl:w-[25%] absolute -z-[1] top-10 sm:-top-[4rem] -right-[25%] sm:right-0' />
        </div>

      </div>
    </section>
  )
}
