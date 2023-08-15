import Home from './comonent/Home';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Game from './comonent/Game';
import { styled } from 'styled-components';
import Nothing from './Nothing';


function App() {
  const [setval , oldval] = useState(false)
  const toogle = () =>{
    oldval((preav) => !preav)
  }
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // You can use a modal or a styled message instead of an alert for better UX
      alert('This is a desktop app, please open the link in desktop or laptop.');
      return(
<Nothing></Nothing>
      )
     
    }
  }, []);

  return (
    <div className="App">
      <>{setval ? <Game/> : <Home toogle={toogle}/>}</>
    <div className='rules'></div>
    </div>

  );

}

export default App;




