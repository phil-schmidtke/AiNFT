import AiNFT from "./AiNFT"

export default function Home() {
  return (
    <div className='w-full h-screen'>
      <AiNFT />
      <div className="flex">
        <button className="text-xl mx-auto p-4 bg-fuchsia-500 hover:bg-fuchsia-600 rounded-xl shadow-2xl">Get yours now!</button>
      </div>
    </div>
  )
}
