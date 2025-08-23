import React, { useRef, useState } from "react";
import Hero from "../components/Card";
import Nav from "../components/Navbar";
import Con from "../components/Controlled";
import Huk from "../components/Hook";

function App() {
  const name = useRef(null);
  const age = useRef(null);
  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(name.current.value, age.current.value);
  }

  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      name: "Besabriyan",
      artist: "Armaan Malik",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1522688306378-fbb315c6ba9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      name: "Jo Tere Sang",
      artist: "Jeet Ganguly",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1534196511436-921a4e99f297?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      name: "Abhimanyu",
      artist: "Raanjha",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1543616991-75a2c125ff5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      name: "Maiyaa Mainu",
      artist: "Sacheet Tandon",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1507446933-4847a1d12823?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      name: "Deva Deva",
      artist: "Arjit singh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1504507926084-34cf0b939964?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      name: "Sarphira",
      artist: "Pritam",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1582727807014-5b320f436d33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      name: "Kar Har Maidaan Fateh",
      artist: "Arjit Singh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1488903809927-48c9b4e43700?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      name: "Har Har Gange",
      artist: "Siddharth-Garima",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1695185954879-73b06af2f35d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D",
      name: "Tainu Khabar Nahi",
      artist: "Sachin-Jigar",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1671599016211-6e8dc0013244?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxtb3RpdmF0aW9ufGVufDB8fDB8fHww",
      name: "Aashiq Tera",
      artist: "Sohail Sen",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1589390202741-35c929668400?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxtb3RpdmF0aW9ufGVufDB8fDB8fHww",
      name: "Hum Dard",
      artist: "Mithoon-Arjit Singh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQyfHxtb3RpdmF0aW9ufGVufDB8fDB8fHww",
      name: "Sapphire",
      artist: "Ed Sheeran",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-cyan-100">
        <Nav data={songData} />
        <div className="px-20 flex gap-10 mt-8 flex-wrap justify-between">
          {songData.map((obj, index) => (
            <Hero
              data={obj}
              handleClick={handleClick}
              index={index}
              key={index}
            />
          ))}

          {/* <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero /> */}
        </div>
      </div>

      <div className="p-4">
        <form className="gap-10" action="" onSubmit={handleSubmit}>
          <input ref={name}
            className="font-semibold mr-4 rounded h-8 w-50 gap-10 text-center bg-cyan-200 text-black "
            type="text"
            placeholder="Enter Your Name"
          />
          <input ref={age}
            className="font-semibold mr-4 rounded h-8 w-50 gap-10 text-center bg-cyan-200 text-black "
            type="number"
            placeholder="Enter the Age"
          />
          <input
            className="bg-cyan-700 text-xl font-semibold font-sans text-white rounded w-25"
            type="submit"
          />

          <h2>Hellowww!</h2>
        </form>
      </div>

      <Con/>

      <Huk />
    </>
  );
}

export default App;
