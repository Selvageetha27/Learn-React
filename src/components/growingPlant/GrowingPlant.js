import React from 'react'

function GrowingPlant(props) {
 
  const {plantData}=props
  return (
  
        <div className='plant'>
            <h1> I am a {plantData.name}</h1>
            <div>I'm GrowingPlant
              <span style={{fontSize:`${plantData.size}px`}}>{plantData.icon}</span>
            </div>

        </div>
         
      
    
  )
}

export default GrowingPlant