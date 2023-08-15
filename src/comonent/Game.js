import React, { useEffect, useState } from 'react'
import Totalscore from './Totalscore'
import Numberselect from './Numberselect'
import Rolldice from './Rolldice'
import styled from 'styled-components'
import "../comonent/Home.css"



function Game() {

  const [score , setscore] = useState(0)
  const [selected , setselected] = useState();
  const [currentdice , setcurrentdice] = useState(1)
  const [error , seterror] = useState()

  const randomno = (min , max) => {
    return Math.floor(Math.random() * (max - min)+min)
 }

 const setcurrentdicenumber = () =>{
  if(!selected ){
    seterror("select the number")
    return
  }

   const randomnumber = randomno(1,7)

   setcurrentdice((prev) => randomnumber)
 

 if(selected === randomnumber ){
  setscore(prev => prev + 1 )
 }
 else{
  setscore(prev => prev - 1 )
  

 }



 setselected(undefined)

 }



  return (
    <MainCon>
    
    <div className='no-column-sideway'>
      <Totalscore score={score} ></Totalscore>
      <Numberselect error = {error}
      seterror = {seterror}
      selected={selected}
      setselected={setselected}></Numberselect>
      
  
    </div>
    <Rolldice setcurrentdicenumber = {setcurrentdicenumber}
    currentdice={currentdice}>kjrgrg</Rolldice>
    <div >
      
      </div>
    </MainCon>
  )
}

export default Game



const MainCon = styled.main`
padding-top: 70px;
`


