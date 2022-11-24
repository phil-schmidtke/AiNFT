"use client";

import { useState } from "react";
import AiNFT from "./AiNFT"

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className='w-full h-screen'>
      <AiNFT />
      <div className="flex">
        <button onClick={() => setOpen(!open)} className="text-xl mx-auto p-4 bg-fuchsia-500 hover:bg-fuchsia-600 rounded-xl shadow-2xl">Get yours now!</button>
      </div>
    </div>
    {
      open ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
          <div className="w-96 h-96 relative z-0 text-center">
            <h1 className="text-xl font-bold text-center flex pb-4">Type 5 words and Mint!</h1>
            <div className="flex mt-4">
              <input className="bg-transparent border-2 border-white rounded-xl p-4 mx-auto w-full" placeholder="5 words here.." />
            </div>
            <div className="flex mt-4">
              <button className="mx-auto">Mint NFT</button>
            </div>
          </div>
        </div>
      ) : (<></>)
    }
    
    </>
  )
}
