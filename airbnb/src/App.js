import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import { data } from "./Components/data";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="lg:container lg:mx-auto mt-10 px-4 flex gap-3 md:gap-5 flex-wrap justify-center md:justify-start">
        {data.map((item) => {
          return (
            <Card
            key={item.id}
              title={item.title}
              // status={item.location}
              price={item.price}
              rating={item.stats.rating}
              reviewCount={item.stats.reviewCount}
              location={item.location}
              img={item.coverImg}
              openSpots={item.openSpots}
            />
          );
        })}
      </section>
    </div>
  );
}
export default App;
