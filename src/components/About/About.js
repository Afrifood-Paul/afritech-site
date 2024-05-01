import React from 'react';

export const About = () => {
  return (
   <section id='about' className='w-[50%] mx-auto pb-10 md:-mt-0 2xl:-mt-72'>
    <h1 className='skillTitle text-center text-3xl font-bold py-3 text-yellow-600'>What I DO </h1>
    <p className='skillDesc text-center text-[10px] w-[70vw] sm:w-[100%] -ms-10 sm:-ms-0 sm:text-sm pb-5 md:pb-10'>
        I am a skilled and passionate Web Developer with experience in building a mavel web applications and user friendly interface.
        I have a strong understanding of design and a keen eye for detail.I am proficient in HTML.CSS,and Javascript and as well as React Js.
    </p>
    <div className='skillBars flex flex-col md:grid md:grid-cols-2 md:gap-10 md:-ms-4 lg:-ms-16 xl:-ms-28 2xl:ms-40 2xl:flex 2xl:flex-col'>

        <div className='skillBar w-[90vw] -ms-[75px] sm:ms-5 sm:w-[100%] lg:w-[45vw] flex items-center py-5 bg-gradient-to-l md:w-[45vw] md:-ms-40 md:leading-8 from-blue-800 to-blue-900 h-[20vh] rounded-xl'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] ms-5 md:w-[15%] 2xl:w-[10%] rounded-s-full' />
            <div className='skillBarText ps-5'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  This is my react Project Practice to learn This is my react Project Practice to learn
                  This is my react Project Practice to learn.
                </p>
            </div>
        </div>

        <div className='skillBar w-[90vw] -ms-[75px] sm:ms-5 sm:w-[100%] flex items-center  py-5 bg-gradient-to-l md:w-[45vw] md:-ms-1 md:-mt-1 lg:ms-5 from-blue-800 to-blue-900 h-[20vh] rounded-xl mt-5 xl:ms-14 2xl:ms-16 lg:mt-[2px]'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] md:w-[15%] ms-5 rounded-s-full 2xl:w-[10%]' />
            <div className='skillBarText ps-5 md:leading-8'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  This is my react Project Practice to learn This is my react Project Practice to learn
                  This is my react Project Practice to learn.
                </p>
            </div>
        </div>

        <div className='skillBar w-[90vw] -ms-[75px] sm:ms-5 sm:w-[100%] lg:w-[45vw] flex items-center py-5 bg-gradient-to-l md:w-[45vw] md:-ms-40 md:leading-8 from-blue-800 to-blue-900 h-[20vh] rounded-xl mt-5 md:-mt-2'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] ms-5 md:w-[15%] rounded-s-full 2xl:w-[10%]' />
            <div className='skillBarText ps-5'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  This is my react Project Practice to learn This is my react Project Practice to learn
                  This is my react Project Practice to learn.
                </p>
            </div>
        </div>

        <div className='skillBar w-[90vw] -ms-[75px] sm:ms-5 sm:w-[100%] flex items-center  py-5 bg-gradient-to-l md:w-[45vw] md:-ms-1 lg:ms-5 from-blue-800 to-blue-900 h-[20vh] rounded-xl mt-5 md:-mt-2 xl:ms-14 2xl:ms-16'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] md:w-[15%] ms-5 rounded-s-full 2xl:w-[10%]' />
            <div className='skillBarText ps-5 md:leading-8'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  This is my react Project Practice to learn This is my react Project Practice to learn
                  This is my react Project Practice to learn.
                </p>
            </div>
        </div>
    </div>
   </section>
  )
}
