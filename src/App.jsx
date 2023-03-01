import { useState } from 'react'
import './App.css'
import Message from './components/Message'
import Author from './components/Author'
import phrases from './data/phrases.json'


function App() {

  const arrBgImg = [
    "/fortuna-1/fondo1.jpg",
    "/fortuna-1/fondo2.jpg",
    "/fortuna-1/fondo3.jpg",
    "/fortuna-1/fondo4.jpg",
  ];

  const [ index, setIndex ] = useState ( 0 )
  
  const [indexBg, setIndexBg] = useState(0);

  const changeBg =() =>{
     setIndexBg(Math.floor(Math.random()*4))
  }

  const changePhrase = () =>{
    console.log("cambiafrase"); 
    setIndex(Math.floor( Math.random() * 15 ));
    changeBg(); 
  }

  return (
    <div className="App" style={{ backgroundImage: "url(" + arrBgImg[indexBg] + ")",}}>
      <h1 className="Title">Galletas de la Fortuna</h1>
      <div className='box'>
      <Message phrasesData= {phrases[index]}/>
      <br />
      <Author phrasesData= {phrases[index]} />
      </div>
      <button className='btn' onClick={ changePhrase }>Otra frase</button>
       
    </div>
  )
}

export default App
