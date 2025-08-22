import React from "react";

function Hero({data, handleClick, index}){

    const{image, name, artist, added} = data;

    return(
        <>
        <div className="m-2 w-65 bg-cyan-800 p-4 rounded-md flex gap-3 relative pb-8 mt-8">
            <div className="w-20 h-18 bg-cyan-200 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={image} alt="" />
            </div>
            <div className="">
                <h3 className="text-xl text-white font-bold font-serif">{name}</h3>
                <h6 className="text-sm font-semibold">{artist}</h6>
            </div>

            <button onClick={()=>handleClick(index)} className={`px-4 py-3 ${added === false ? "bg-black" : "bg-emerald-600"} absolute bottom-0 whitespace-nowrap left-1/2 -translate-x-[50%] translate-y-[50%] text-xs rounded-full text-white`}>{added === false ? "Add to favourites." : "Added"}</button>
        </div>
        </>
    )
}

export default Hero;