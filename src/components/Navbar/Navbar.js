import React, {useState} from 'react';
import { Link } from 'react-scroll';
//import Radium, { StyleRoot } from 'radium';

export const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    

<nav className="bg-white bg-gradient-to-l from-indigo-500 to-blue-950 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-yellow-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 sm:py-0">
    <Link className='ps-[8px] lg:ps-5 2xl:ps-0'>
      <h2 className='ps-1 text-yellow-600 font-bold text-2xl border-l-2 border-yellow-600'>
        Afri<span className='text-yellow-400'>tech.</span>
      </h2>
    </Link>

    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:pe-2 lg:pe-5 2xl:pe-0">
        <button className='menu-btn hidden sm:flex font-normal hover:bg-yellow-500 hover:text-white hover:transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-[32px] py-2 px-[1rem] justify-center border-none bg-yellow-500 text-white' onClick={ () => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
          Contact Me
        </button>
    </div>

    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <Link activeClass='active' to='BodyOne' spy={true} smooth={true} offset={-100} duration={500} className="LinkItem m-8 pb-1 hover:text-yellow-500 hover:border-b-2 border-b-yellow-600 transition ease-in-out duration-200" >Home</Link>
      <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="LinkItem m-8 pb-1 hover:text-yellow-500 hover:border-b-2 border-b-yellow-500 transition ease-in-out duration-200" >About</Link>
      <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="LinkItem m-8 pb-1 hover:text-yellow-500 hover:border-b-2 border-b-yellow-500 transition ease-in-out duration-200" >Portfolio</Link>
      <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="LinkItem m-8 pb-1 hover:text-yellow-500 hover:border-b-2 border-b-yellow-500 transition ease-in-out duration-200" >Clients</Link>
    </div>
  </div>
  
  <div className='flex justify-end -mt-11'>
    
  <button data-collapse-toggle="navbar-default" type="button" class="inline-flex  items-center p-2 w-10 h-10 justify-center text-sm text-yellow-600 rounded-lg md:hidden focus:outline-none" aria-controls="navbar-default" aria-expanded="false"
     onClick={() => setshowMenu(!showMenu)}
    >
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
  </div>
  

    <div className="navMenu items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"
      style={{display: showMenu? 'flex' : 'none'}} 
    >
      <Link activeClass='active' to='BodyOne' spy={true} smooth={true} offset={-100} duration={500} className="LinkItem m-8 pb-1 hover:text-yellow-500 hover:border-b-2 border-b-yellow-600 transition ease-in-out duration-200" onClick={() => setshowMenu(!false)}>Home</Link>
      <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="LinkItem m-8 pb-1 hover:text-yellow-500 hover:border-b-2 border-b-yellow-500 transition ease-in-out duration-200" onClick={() => setshowMenu(!false)}>About</Link>
      <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="LinkItem m-8 pb-1 hover:text-yellow-500 hover:border-b-2 border-b-yellow-500 transition ease-in-out duration-200" onClick={() => setshowMenu(!false)}>Portfolio</Link>
      <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-100} duration={500} className="LinkItem m-8 pb-1 hover:text-yellow-500 hover:border-b-2 border-b-yellow-500 transition ease-in-out duration-200" onClick={() => setshowMenu(!false)}>Clients</Link>
  
      <button className='menu-btn sm:flex font-normal hover:bg-yellow-500 hover:text-white hover:transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-[32px] py-2 px-[14px] mt-4 mb-4 justify-center border-none bg-yellow-500 text-white' onClick={ () => {
         document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
       }}>
         Contact Me
      </button>
    </div>
</nav>

  )
}
