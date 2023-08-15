import React, { useState } from 'react'
import  './Game.css'
import styled from 'styled-components'



function Numberselect({seterror, error ,setselected, selected}) {
    const arrnum = [1,2,3,4,5,6]

    const setselectedhandler = (value) => {
      setselected(value)
      seterror('')
    }
    
  return (
      

    <Sideway>
     <Para>{error}</Para>
        <div className='flex'>
        {arrnum.map((value , i ) => 
         (<Noselect
             key = {i}
             isselected ={value === selected}
            onClick={() =>  setselectedhandler(value)}
            >{value}</Noselect>
        )
    )   }
</div>
<p className='selectnumber'>Select number</p>
</Sideway>   
  )
}




export default Numberselect


const Sideway =  styled.div`
display: flex;
flex-direction: column;
align-item:end;

.flex {
display: flex;
align-items: end;
gap: 24px;
}


`

const  Noselect  = styled.div`
    height: 72px ;
    width: 72px ;
    display: grid ;
    border: 1px solid black ;
    place-items:center ;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isselected ? "black" : "whilte")  };
    color: ${(props) => (props.isselected ? "white" : "black")  };

  `;

  const Para =  styled.p`
  color:red;
  `
