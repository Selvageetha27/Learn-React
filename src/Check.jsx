import React from 'react'
import GrowingPlant from './components/growingPlant/GrowingPlant';


function Check() {
  
 const plantData1={
    name:'rose',
    icon:'🌹',
    size:50,
  }
   const plantData2={
    name:'sunflower',
    icon:'@',
    size:50,
  }
  return (
    <div>
      <h1>hai </h1>
      <GrowingPlant plantdata={plantData1}/>
        <GrowingPlant plantdata={plantData2}/>
    </div>


  )
}

export default Check;

