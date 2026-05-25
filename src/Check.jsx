import React from 'react'
import GrowingPlant from './components/growingPlant/GrowingPlant';


function Check() {
  
 const plantData1={
    name:'rose',
    icon:'🌹',
    size:50,
    aboutMe:['diverse','love','beauty']
  }
   const plantData2={
    name:'sunflower',
    icon:'@',
    size:50,
    aboutMe:['sun','yellow','beauty']
  }
  const news1={
    sen:'Hey there'
  }
   const news2={
    sen:'Hellooo'
  }
  return (
    <div>
      <h1>hai </h1>
      <GrowingPlant data={plantData1} news={news1}/>
      <GrowingPlant data={plantData2} news={news2}/>
    </div>


  )
}

export default Check;

