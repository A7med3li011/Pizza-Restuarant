import React from 'react'

export default function Button({text,width,onclick}) {
  if(onclick) return <button onClick={onclick} className={`rounded-full  bg-yellow-400 w-${width} px-3 py-2 text-white font-semibold  transition-all duration-300 inline-block mx-auto mt-4 hover:bg-yellow-300 text-sm`}>
  {text}
</button>
  return (
    <button className={`rounded-full bg-yellow-400 w-${width} px-3 py-2 text-white font-semibold  transition-all duration-300 inline-block mx-auto mt-4 hover:bg-yellow-300`}>
      {text}
    </button>
  )
}
