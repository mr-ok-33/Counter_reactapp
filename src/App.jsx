import React, { useEffect, useState } from "react";
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count => count + 1);
  }
  const decreament = () => {
    setCount(count => count - 1);
  }
  const reset = () => {
    setCount(0);
  }

  useEffect(() => {
    console.log("counter updates", count);
  }, [count]);



  return (
    <div className="w-[300px] md:w-[450px] lg:w-[500px] flex flex-col justify-start items-center  h-[350px] bg-green-400 p-8 mx-auto mt-[200px] border rounded-2xl">
      <div className="bg-slate-50 px-3 py-2 mb-[40px] w-[170px] text-center text-2xl border rounded-lg">Counter : {count}</div>
      <div className="w-[140px] text-center m-3 bg-gray-300 border rounded-lg px-3 py-2 outline-none font-mono " onClick={increament}><button className="text-xl">Increment</button></div>
      <div className="w-[140px] text-center  m-3 text-xl bg-gray-300 border rounded-lg px-3 py-2 outline-none font-mono " onClick={decreament}><button>Decrement</button></div>
      <div className="w-[140px] text-center m-3 text-xl bg-gray-300 border rounded-lg px-3 py-2 outline-none font-mono " onClick={reset}><button>Reset</button></div>   
    </div>
  )
}
export default App;




