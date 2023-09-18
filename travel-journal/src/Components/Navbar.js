import React from "react";

function Navbar() {
  return (
    <nav className="nav flex justify-center py-6 bg-red-500 text-white">
      <span className="logo">
        <img src="/images/logo.svg" alt="Logo" />
      </span>
      <h1 className="ms-2"> My Travel Journal</h1>
    </nav>
  );
}

export default Navbar;
