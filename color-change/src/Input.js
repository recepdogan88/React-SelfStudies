import React from 'react'
import './App.css';

export default function Input({colorValue,setColorValue}) {
  return (
      <div>
            <form onSubmit={(e)=> e.preventDefault() }>
                
                <input type="text" placeholder="Add color name" required value={colorValue} onChange={(e)=> setColorValue(e.target.value)}></input>
            </form>
      </div>
    
  )
}
