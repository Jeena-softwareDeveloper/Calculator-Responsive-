import React, { useState } from 'react'
import './App.css';

function App() {
  const [texts, setTexts] = useState("");
  return (
    <div className='container'>
      <div className='inputform'>
        <div className='inputs'>
         <input type='text' value={texts}/>
        </div>
        <div className='button1'>
          <input  type='submit' value='DE' onClick={(e)=>setTexts(texts.slice(0,-1))}/>
          <input  type='submit' value='*'  onClick={(e)=>setTexts(texts+e.target.value)}/>
          <input  type='submit' value="AC" onClick={(e)=>setTexts("")}/>
        </div>
        <div className='button2'>
          <input  type='submit' value="1"  onClick={(e)=>setTexts(texts+e.target.value)}/>
          <input  type='submit' value='2'  onClick={(e)=>setTexts(texts+e.target.value)}/>
          <input  type='submit' value='3'  onClick={(e)=>setTexts(texts+e.target.value)}/>
          <input  type='submit' value='+'  onClick={(e)=>setTexts(texts+e.target.value)}/>
         
        </div>
        <div className='button3'>
        <input  type='submit' value='4'  onClick={(e)=>setTexts(texts+e.target.value)}/>
          <input  type='submit' value='5'  onClick={(e)=>setTexts(texts+e.target.value)}/>
          <input  type='submit' value='6'  onClick={(e)=>setTexts(texts+e.target.value)}/>
          <input  type='submit' value='-'  onClick={(e)=>setTexts(texts+e.target.value)}/>
        </div>
        <div className='button4'>
        <input  type='submit' value='7'  onClick={(e)=>setTexts(texts+e.target.value)}/>
        <input  type='submit' value='8'  onClick={(e)=>setTexts(texts+e.target.value)}/>
          <input  type='submit' value='9'  onClick={(e)=>setTexts(texts+e.target.value)}/>
          <input  type='submit' value='/'  onClick={(e)=>setTexts(texts+e.target.value)}/>
          
        </div>
        <div className='button2'>
          <input  type='submit' value='.'  onClick={(e)=>setTexts(e.target.value)}/>
          <input  type='submit' value='0'  onClick={(e)=>setTexts(texts+e.target.value)}/>

          <input  type='submit' value='=' onClick={(e)=>setTexts(eval(texts))} />
        </div>
      

      </div>

    </div>
  )
}

export default App