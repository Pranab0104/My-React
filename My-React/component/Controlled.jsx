import React, { useState } from "react";

function Con(){

    const [val, setVal] = useState({name:"", mail:""} );
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(val)
    }

    return(
        <>
        <div className="p-4 h-screen w-full">
            <form className="gap-10" onSubmit={handleSubmit} action="">

                <input onChange={(event)=> setVal({...val, name: event.target.value})} className="font-semibold mr-4 rounded h-8 w-50 gap-10 text-center bg-cyan-200 text-black " type="text" name="name" placeholder="Type Your name" />
                <input onChange={(event)=> setVal({...val, mail: event.target.value})} className="font-semibold mr-4 rounded h-8 w-50 gap-10 text-center bg-cyan-200 text-black " type="text" email="email" placeholder="Type Your mail ID" />
                <input className="bg-cyan-700 text-xl font-semibold font-sans text-white rounded w-25" type="submit"  />

            </form>
        </div>
        </>
    )
}

export default Con;