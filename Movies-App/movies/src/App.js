import './App.css';
import {useState,useEffect} from "react"
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
 
function App() {
  const [search,setSearch]=useState("")
  const [movies,setmovies]=useState([])

async function getData(){
    const baseURL="http://localhost:3001/movies"
    const response= await fetch(baseURL)
    const data=await response.json()
    setmovies(data)
    console.log(movies)
  }
  
useEffect(() => {
    getData()
},[]);
 
console.log(movies)

function searchMovie(e){
    setSearch(e.target.value)
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
          />
      </div>   
   
  );
}

export default App;
