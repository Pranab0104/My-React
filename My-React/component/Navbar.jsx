import React from "react";

function Nav({data}) {
  return (
    <>
      <div className="w-full flex justify-between items-center px-15 py-3 bg-zinc-200 border-b-4">
        <h3 className="text-2xl font-bold font-serif text-fuchsia-800 ">SynTrek </h3>
        <div className="px-4 h-10 justify-center items-center flex p-3 bg-cyan-800 rounded-md text-white gap-2">
          <h3 className="text-amber-50">Add to Favourite</h3>
          <h4 className="text-amber-50 m-2">{data.filter (item => item.added).length}</h4>
        </div>
      </div>
    </>
  );
}

export default Nav;