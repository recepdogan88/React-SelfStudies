import Hero from './Hero';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Fullcard from './Fullcard';

function App() {

  const data =[{
    title:"HTML",
    description:"This Is HTML"
  },
  {
    title:"CSS",
    description:"This Is CSS"
  },
  {
    title:"JS",
    description:"This Is JS"
  },
  {
    title:"REACT",
    description:"This Is REACT"
  },
  {
    title:"ANGULAR",
    description:"This Is ANGULAR"
  },
  {
    title:"JAVA",
    description:"This Is JAVA"
  }]
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Hero data={data}/>}></Route> 
        <Route path="/cards/:title" element={<Fullcard data={data}/>}></Route> 
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
