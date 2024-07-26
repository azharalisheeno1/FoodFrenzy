import React from 'react'
import loading from "../../assets/loading.png"

function Loading() {
  return (
    <>
    <div className="relative flex justify-center h-screen  items-center">
    <div className="absolute animate-spin rounded-full h-36 w-36 border-t-4 border-b-4 border-purple-500"></div>
    <img src={loading}  className="rounded-full h-24 w-24" />
    
</div>
    </>
  )
}

export default Loading