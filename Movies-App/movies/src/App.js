import './App.css';
import {useState} from "react"
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
 
function App() {
  const [search,setSearch]=useState("")
  const [movies,setmovies]=useState([
    {
        "id": 1,
        "name": "The Flash",
        "rating": 8.3,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
    },

    {
        "id": 2,
        "name": "Interstellar",
        "rating": 6.8,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },

    {
        "id": 3,
        "name": "Arrow",
        "rating": 7.9,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
    }, {
        "id": 4,
        "name": "Rogue",
        "rating": 7.4,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg"
    },

    {
        "id": 5,
        "name": "Project Power",
        "rating": 6.7,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg"
    },

    {
        "id": 6,
        "name": "Superman",
        "rating": 7.6,
        "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
        "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg"
    }
]
)
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
