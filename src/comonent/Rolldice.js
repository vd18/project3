import React, { useState } from 'react'
import styled from 'styled-components'
import  './Game.js'
import Reset from './Reset.js';



function Rolldice({currentdice , setcurrentdicenumber }) {

  return (
    <div>
    <Dice onClick={setcurrentdicenumber}> 
    <div>
      <img src={`image/dice_${currentdice}.png`} alt='ryl5m'></img>
    
      <p>Click on to roll the dice </p>

    </div>
    </Dice>
  
    
    </div>
  )
}

export default Rolldice;

const Dice = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
font-weight:700;
font-size: 21px;
cursor: pointer;
`





