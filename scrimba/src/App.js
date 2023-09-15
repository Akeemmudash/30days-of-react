
// import React, { useState } from 'react';
import Logo from "./logo.svg"

const Navbar =()=>{
  return( <div className="bg-gray-950 text-white flex items-center justify-between py-4 pe-4">
    <div className="flex items-center"> <img src={Logo} alt="Logo"  width="70" className='Logo me-0'/>
    <h1 className="font-bold text-lg text-cyan-300 ms-0" >ReactFacts</h1>
</div>
  
    <h2 className="text-xs hidden  font-semibold xs:block sm:text-base sm:font-medium">React Course - Project 1</h2>

  </div>);
}
const Main =()=>{

  return(<div className=" mx-5 sm:mx-6 lg:mx-20 mt-14 sm:mt-20 max-w-xs  sm:max-w-none">
    <h3 className="  text-[30px] sm:text-[34px] md:text-5xl font-semibold text-white mb-10">Fun facts about React</h3>
  <ul className="list-disc ms-10 text-white marker:text-sky-600 md:text-lg">
    <li className=" mb-5  sm:mb-7 md:mb-14 marker:text-2xl marker:leading-7 align-top"><span>Was first released in 2013</span></li>
    <li className=" mb-5  sm:mb-7 md:mb-14 marker:text-2xl marker:leading-7 align-top"><span>Was originally created by Jordan Waike</span></li>
    <li className=" mb-5  sm:mb-7 md:mb-14 marker:text-2xl marker:leading-7 align-top"><span>Has well over 100k stars on Github</span></li>
    <li  className=" mb-5  sm:mb-7 md:mb-14 marker:text-2xl marker:leading-7 align-top"><span>Is maintained by Facebook</span></li>
    <li  className="marker:text-2xl marker:leading-7 align-top "><span>Over thousands of enterprise apps, including mobile apps</span></li>
  </ul>
  </div>)
}
const App = ()=>{
return (
<div className="h-screen bg-slate-700 pb-10 overflow-auto">
<Navbar/>
<Main/> 
</div>

);
}

export default App;
