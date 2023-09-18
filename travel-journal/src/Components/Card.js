import React from "react";
 export default function Card({title, imageUrl, description,startDate, endDate, location, googleMapsUrl}){
    return(
    <div className="card flex shadow w-[420px] h-[174px] sm:h-[168px] rounded-md hover:shadow-md">
 <div className="photo flex-grow "><img src={imageUrl} alt=""  className="h-full object-cover rounded-md w-32 max-w-none"/></div>
 <div className="card-body px-2  md:px-3">
    <div className="location leading-5 mb-1"><img src="/images/location-tag.svg" alt="Location Tag" className="inline h-3" /><span className="location-name uppercase text-light md:text-xs text-slate-600 text-[10px]"> {location}</span> <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className=" text-[10px] marker:md:text-xs underline text-slate-400 hover:text-slate-600 sm:ms-1 block sm:inline">View on Google Maps</a></div>
 <h2 className="md:text-2xl  sm:text-xl text-lg font-medium">{title}</h2>
 <div className="period  mt-1 md:mt-3  text-[10px] md:text-xs font-semibold">
    <span className="start-date">{(new Date(startDate)).toDateString().split(/^[A-Za-z]{3} /g)} </span>
    -
    <span className="end-date"> {(new Date (endDate)).toDateString().split(/^[A-Za-z]{3} /g)}</span>
 </div>
 <div className="description mt-1">
    <p className=" text-[9px] md:text-[10px] ">{description}</p>
 </div>
 </div>
    </div>)
 }