import './App.css';
import {useState,useEffect} from "react"
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import axios from 'axios';
function App() {
  const [search,setSearch]=useState("")
  const [movies,setmovies]=useState([])
  
//FETCH GETDATA
// async function getData(){
//     const baseURL="http://localhost:3001/movies"
//     const response= await fetch(baseURL)
//     const data=await response.json()
//     setmovies(data)
//     console.log(movies)
//   }

//AXIOS GET DATA
  async function getData(){
   const response=await axios.get("http://localhost:3001/movies")
   setmovies(response.data)
}
  
useEffect(() => {
    getData()
},[]);
 
console.log(movies)

function searchMovie(e){
    setSearch(e.target.value)
}
//FETCH DELETE METHODU
// async function deleteMovie(Pid){
//     const baseURL=`http://localhost:3001/movies/${Pid}`
//     await fetch(baseURL,{
//         method:"DELETE"
//     })
//     setmovies(movies.filter(mov =>mov.id!==Pid))
// }

//AXIOUS DELET METHODU

async function deleteMovie(Pid){
    axios.delete(`http://localhost:3001/movies/${Pid}`)
    setmovies(movies.filter(mov =>mov.id!==Pid))
}


const filteredMovie=movies.filter(movie=>(
    movie.name.toLowerCase().indexOf(search.toLowerCase())!==-1
))

return (
      <div className='container'>
          <div className='row'>
              <div className='col-lg-12'>
                <SearchBar  
                movies={movies}
                searchMovie={searchMovie}
                />
              </div>
          </div>
          <MovieList 
          movies={filteredMovie}
          setmovies={setmovies}
          deleteMovie={deleteMovie}
          />
      </div>   
   
  );
}

export default App;
