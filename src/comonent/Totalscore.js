import React from 'react'
import './Game.css'


function Totalscore({score}) {
  console.log(score)
  return (
    
    <div className='totalscore'>
      <h1 className='zero'>{score}</h1>
      <h2 className='total-tex'>Total score</h2>
    </div>
   
  )
}

export default Totalscore
