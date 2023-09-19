import React from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form"

function App() {
  return (
    <div>
     <Navbar/>
     <main className="mt-14 md:container  px-2 sm:px-4 mx-auto">
    <Form/>
    
     </main>

  

     </div>
    

  );
}
export default App;
