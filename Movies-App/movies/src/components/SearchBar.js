import React from 'react'
import {useState} from "react"

export default function SearchBar({searchMovie}) {

function handleFormSubmit(event){
     event.preventDefault()
  }
return (
    
    <form onSubmit={handleFormSubmit}> 
      <div className='form-row mb-5'>
        <div className='col-12'>
          <input 
         onChange={searchMovie} 
          type="text" className="form-control" placeholder='Search movie'
          />
        </div>
      </div>
    </form>
  )
}
