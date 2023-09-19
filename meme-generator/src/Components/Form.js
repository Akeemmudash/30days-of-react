import React from "react";
import memesData from "../memesData";

// function SearchBar({className}){
//     return(
  
//   <input type="text"   className={`text-xl py-2 border-2 px-3 inline-block focus:outline-violet-500 ${className}`}/>
  
//     )
//   }
 
             




export default function Form(){
  const [memeData, setMemeData ] = React.useState(({meme:getRandomMeme(),
  topText:"",
  bottomText:"",
  }));
  function getRandomMeme(){
    let meme;
    const {data} = memesData;
  
    const {memes} = data;
    // random number to 100
    const randomIndex =  Math.floor (Math.random() * 100);
  meme =  (memes[randomIndex]);
  return meme;
  }
  function setRandomMeme(){
    setMemeData({ ...memeData, meme: getRandomMeme()});
  

  return;
  
  }
  function changeTopText(event){

    setMemeData({...memeData,  topText:event.target.value});
  }
  function changeBottomText(event){
    setMemeData({...memeData, bottomText:event.target.value});
  }
  console.log(memeData.meme.url)

 
return(
    <div>
<div className="flex gap-4">

<input type="text" id="top"  onChange={changeTopText} className="text-xl py-2 border-2 px-3 inline-block focus:outline-violet-500 w-1/2" placeholder="Top" />
<input type="text"   id="bottom" onChange={changeBottomText}className="text-xl py-2 border-2 px-3 inline-block focus:outline-violet-500 w-1/2"  placeholder="Bottom"/>

</div>
<Button onClick={setRandomMeme}/>
<div className="img relative myoutline text-white text-center"  width={memeData.meme.width}  style={{fontFamily:"Impact sans-serif", textShadow:"-1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333"}}>
  <h4  className="top-text text-5xl w-full  absolute top-0 left-0 font-semibold"> {memeData.topText}</h4>
  <h4 className=" w-full text-5xl bottomText absolute bottom-0 left-0 font-semibold ">{memeData.bottomText}</h4> 
  <img src={memeData.meme.url} alt={memeData.meme.name}  className=" mt-14 w-full h-80 object-contain"/></div>
</div>)
}

function Button({onClick}){ 
   
  return(<button onClick={onClick}  className="mt-3 w-full py-4 bg-gradient-to-r from-violet-800 to-[#A626D3] text-white  text-xl  lg:text-2xl rounded-lg active:scale-[0.99] transition duration-150 ease-in-out font-semibold ">
    Get a new meme image  🖼️
  </button>)
}
