import React from "react";


export default function Card({title, openSpots, rating, reviewCount, country, price, img }) {
  return (
    <div className="card w-40 md:w-44 text-xs pb-4 shadow-md mb-3 rounded-md">
      <figure className=" h-56 md:56 mb-2 relative">
        <img src={`/images/${img}`} alt="Swimmer"  className="w-full h-full object-cover object-center rounded-md" />
      {openSpots === 0 && <div className="availability px-2 text-xs  py-1 absolute top-0 left-0 bg-slate-50 mt-2 ms-2 rounded-sm uppercase">sold out</div>}
      </figure> 
      <p className="align-middle">    
         <span className="rating  align-middle mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
         className=" inline-block leading-3"
        >
          <path
            d="M5.52447 0.463525C5.67415 0.00286925 6.32585 0.00286996 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z"
            fill="#FE395C"
          />
        </svg>

        <span className="rating-no  leading-3 font-light text-gray-700"> {parseFloat(rating).toFixed(1)}</span>
      </span>
      <span className="reviews  leading-3 text-gray-400 font-light align-middle"> ({reviewCount})</span>
      <span className=" text-gray-400 font-light text-xs "> <span className="font-thin text-[10px] align-middle">&#8226;</span><span className="align-middle"> {country}</span></span>
</p>
      <div className="text-xs leading-5">
      <figcaption><h5 className="title font-light">{title}</h5></figcaption>
      <p className=""><b>From ${price}</b> / person
</p>
</div>
    </div>
  );
}
