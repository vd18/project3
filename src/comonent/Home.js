import React from 'react'
import Image from "./image/d.png"
import "../comonent/Home.css"


const Home = ({toogle} ) => {
  return (
<div className='main-box'>
    <div className='img-class'>
      <img src={Image}></img>
    </div>
    <div className='container'>
        <h1 className='h1-tag'>Dice Game</h1>
        <button onClick={toogle} className='button-home'>Play Now</button>

    </div>



    </div>
  )
}

export default Home
