import React from 'react'
import './App.css';

export default function Square({colorValue}) {
  return (
    <div className='square' style={{background:colorValue }}>
     <p>{colorValue ? colorValue : "Empty Value"}</p>
    </div>
  )
}
