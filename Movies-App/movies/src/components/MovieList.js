import React from 'react'

export default function MovieList({setmovies,movies}) {

  function deleteMovie(Pid){
    setmovies(movies.filter(mov =>mov.id!==Pid))
  }

  return (
      <div className='row'>
      {movies.map(movie =>(
      <div className='col-lg-4'key={movie.id}>
        <div className="card mb-4 shadow-sm" >
          <img src={movie.imageURL} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">{movie.overview}</p>
              <div className='d-flex justify-content-between align-items-center'>
                <button onClick={()=> deleteMovie(movie.id)} type='button' className='btn btn-md btn-outline-danger'>DELETE</button>
                <h2><span className='badge bg-info'>{movie.rating}</span></h2>
              </div>
          </div>
          </div>
       </div>
     ))}
      </div>
  )
}
