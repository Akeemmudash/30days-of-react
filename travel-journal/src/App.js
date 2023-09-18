import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { data } from "./Components/data";
function App() {
  return (
    <div>
     <Navbar/>
     <div className=" mt-10"> <main className="lg:container mx-auto px-2 sm:px-4  flex gap-6 justify-center flex-wrap mb-10">
     {data.map(item=>{
      console.log(item)
      return <Card  key={item.id} {...item} />
     })}
     </main>
     </div>
    
     
    </div>
  );
}
export default App;
