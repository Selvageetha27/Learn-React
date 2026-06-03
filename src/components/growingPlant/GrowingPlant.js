import React,{ useState,useEffect } from 'react'

function GrowingPlant(props) {

  const { data } = props
  const { news } = props
  let{ name, size, icon,aboutMe } = data

  const[dynamicSize,setdynamicSize]=useState(size)

  useEffect(()=>{
    const interval=setInterval(()=>{
      if(dynamicSize < 130)setdynamicSize(dynamicSize+20)
    },1000)
    return()=>clearInterval(interval)
  },[dynamicSize,name])

  const handleClick =() =>{
     setdynamicSize(dynamicSize + 20)
     console.log(dynamicSize)
  }
  return (

    <div className='plant'>
      <h1> I am a {data.name},I'm GrowingPlant</h1>
      

      <div>
        <span style={{ fontSize: `${dynamicSize}px` }}>{data.icon}</span>
        {name === 'rose' ?<span>Yes</span>:''}
      </div>
      <button onClick={handleClick}>Give Water</button>
      {aboutMe.map((value ,index)=><div>{index+1}. {value}</div>
      )}
      <div>{news.sen}</div>

    </div>



  )
}

export default GrowingPlant