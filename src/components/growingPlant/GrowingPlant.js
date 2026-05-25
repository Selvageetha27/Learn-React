import React from 'react'

function GrowingPlant(props) {

  const { data } = props
  const { news } = props
  const { name, size, icon,aboutMe } = data
  return (

    <div className='plant'>
      <h1> I am a {data.name}</h1>
      {name === 'rose' ? <div>this is rose</div> : <div>this is not rose</div>}

      <div>I'm GrowingPlant
        <span style={{ fontSize: `${data.size}px` }}>{data.icon}</span>
        {name === 'rose' ?<span>Yes</span>:''}
      </div>
      {/* {name === 'rose' ? <div>this is rose</div> : <div>this is not rose</div>} */}
      {aboutMe.map((value ,index)=><div>{index+1}. {value}</div>
      )}
      <div>{news.sen}</div>

    </div>



  )
}

export default GrowingPlant