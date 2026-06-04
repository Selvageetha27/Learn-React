import React from 'react'
import GrowingPlant from './components/growingPlant/GrowingPlant';
import GrowingPlant2 from './components/growingPlant/GrowingPlant2';


function Check() {

  const flower="Tulip"
 const data={
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
      <GrowingPlant2 con={flower} con2={plantData2}/>
    


  )
}

export default Check;

