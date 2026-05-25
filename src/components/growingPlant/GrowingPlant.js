import React,{useState} from 'react'

function GrowingPlant(props) {

  const { data } = props
  const { news } = props
  const { name, size, icon,aboutMe } = data

  const[dynamicSize,setDynamicSize]=useState(size)

  const handleClick =() =>{
     setDynamicSize(dynamicSize + 20)
  }
  return (

    <div className='plant'>
      <h1> I am a {data.name},I'm GrowingPlant</h1>
      

      <div>
        <span style={{ fontSize: `${data.dynamicSize}px` }}>{data.icon}</span>
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