import React from 'react'

const DrawOutlineButton = ({ children, ...rest }) => {
    return (
      <button
        {...rest}
        className="group relative px-4 py-2 font-medium text-yellow-400 transition-colors duration-[400ms] hover:text-indigo-300"
      >
        <span>{children}</span>
  
        {/* TOP */}
        <span className="absolute left-0 top-0 h-[2px] w-0 bg-yellow-600 transition-all duration-100 group-hover:w-full" />
  
        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[2px]  bg-yellow-600 transition-all delay-100 duration-100 group-hover:h-full" />
  
        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[2px] w-0  bg-yellow-600 transition-all delay-200 duration-100 group-hover:w-full" />
  
        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[2px]  bg-yellow-600 transition-all delay-300 duration-100 group-hover:h-full" />
      </button>
    );
  };

export const Portfolio = () => {
  return (
    <section id='portfolio' className='w-[50%] mx-auto pb-10 2xl:mt-24'>
    <h1 className='skillTitle text-center text-3xl font-bold py-3 text-yellow-600'>My Portfolio </h1>
    <p className='skillDesc text-center text-[10px] w-[70vw] sm:w-[100%] -ms-10 sm:-ms-0 sm:text-sm pb-5 md:pb-10'>
        I take pride in paying attention to the smallest details and making sure that my work is programatically perfect.
        I am excited to bring my smallest skills and experience to help businesses achieve their goals and create a strong 
        <span className='text-yellow-600 font-bold'> online presence.</span>
    </p>
    <div className='skillBars flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 md:gap-10 md:-ms-2 lg:-ms-12 xl:-ms-[102px] 2xl:-ms-32'>

        <div className='skillBar w-[90vw] xl:w-[28vw] xl:h-[40vh] -ms-[75px] sm:ms-5 sm:w-[100%] lg:w-[45vw] flex items-center py-5 bg-gradient-to-l md:w-[45vw] md:-ms-40 lg:-ms-44 md:leading-8 from-blue-800 to-blue-900 h-[20vh] rounded-xl'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] ms-5 md:w-[15%] 2xl:w-[10%] rounded-s-full' />
            <div className='skillBarText ps-5'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  To access this site for proper review and understanding of the site vist the web application link CLICK-HERE
                </p>
            </div>
        </div>

        <div className='skillBar w-[90vw] xl:w-[28vw] xl:h-[40vh] -ms-[75px] sm:ms-5 sm:w-[100%] flex items-center  py-5 bg-gradient-to-l md:w-[45vw] md:-ms-1 md:-mt-1 lg:ms-5 from-blue-800 to-blue-900 h-[20vh] rounded-xl mt-5 xl:-ms-4 lg:mt-[2px]'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] md:w-[15%] ms-5 rounded-s-full 2xl:w-[10%]' />
            <div className='skillBarText ps-5 md:leading-8'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  To access this site for proper review and understanding of the site vist the web application link CLICK-HERE
                </p>
            </div>
        </div>

        <div className='skillBar w-[90vw] xl:w-[28vw] xl:h-[40vh] -ms-[75px] mt-5 md:mt-0 sm:ms-5 sm:w-[100%] lg:w-[45vw] flex items-center py-5 bg-gradient-to-l md:w-[45vw] md:-ms-40 lg:-ms-44 xl:ms-32 md:leading-8 from-blue-800 to-blue-900 h-[20vh] rounded-xl'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] ms-5 md:w-[15%] 2xl:w-[10%] rounded-s-full' />
            <div className='skillBarText ps-5'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  To access this site for proper review and understanding of the site vist the web application link CLICK-HERE
                </p>
            </div>
        </div>

        <div className='skillBar w-[90vw] xl:w-[28vw] xl:h-[40vh] -ms-[75px] sm:ms-5 sm:w-[100%] flex items-center  py-5 bg-gradient-to-l md:w-[45vw] md:-ms-1 md:-mt-1 lg:ms-5 from-blue-800 to-blue-900 h-[20vh] rounded-xl mt-5 xl:-ms-44 lg:mt-[2px]'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] md:w-[15%] ms-5 rounded-s-full 2xl:w-[10%]' />
            <div className='skillBarText ps-5 md:leading-8'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  To access this site for proper review and understanding of the site vist the web application link CLICK-HERE
                </p>
            </div>
        </div>

        <div className='skillBar w-[90vw] xl:w-[28vw] xl:h-[40vh] -ms-[75px] mt-5 md:mt-0 sm:ms-5 sm:w-[100%] lg:w-[45vw] flex items-center py-5 bg-gradient-to-l md:w-[45vw] md:-ms-40 lg:-ms-44 xl:-ms-4 md:leading-8 from-blue-800 to-blue-900 h-[20vh] rounded-xl'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] ms-5 md:w-[15%] 2xl:w-[10%] rounded-s-full' />
            <div className='skillBarText ps-5'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  To access this site for proper review and understanding of the site vist the web application link CLICK-HERE
                </p>
            </div>
        </div>

        <div className='skillBar w-[90vw] xl:w-[28vw] xl:h-[40vh] -ms-[75px] sm:ms-5 sm:w-[100%] flex items-center  py-5 bg-gradient-to-l md:w-[45vw] md:-ms-1 md:-mt-1 lg:ms-5 from-blue-800 to-blue-900 h-[20vh] rounded-xl mt-5 xl:ms-32 lg:mt-[2px]'>
            <img src='./assets/myself.jpg' alt='' className='skillBarImg w-[4%] md:w-[15%] ms-5 rounded-s-full 2xl:w-[10%]' />
            <div className='skillBarText ps-5 md:leading-8'>
                <h2 className='text-xl font-semibold ps-10 text-yellow-500'>HTML And CSS</h2>
                <p className='w-[90%] text-[14px] aboutPara'>
                  To access this site for proper review and understanding of the site vist the web application link CLICK-HERE
                </p>
            </div>
        </div>
    </div>
    <div className="flex items-center justify-center mt-5">
       <DrawOutlineButton>VIEW-MORE</DrawOutlineButton>
    </div>
   </section>
  )
}
