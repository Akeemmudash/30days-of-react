import React from "react";

function Navbar() {
  return (
    <nav className="nav flex items-center px-4 md:px-10 py-5  text-white bg-gradient-to-r from-violet-800 to-[#A626D3]">
      <span className="logo">
        <img src="/images/troll-face.svg" alt="Logo" width="40" />
      </span>

      <h1 className="ms-2 text-lg  md:text-xl font-semibold">Meme Generator</h1>
      <h3 className=" text-sm md:text-lg  ms-auto hidden sm:inline-block ">React <span className="hidden md:inline-block">Course</span> - Project 3</h3>
    </nav>
  );
}


export default Navbar;
