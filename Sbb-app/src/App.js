import { useState, useEffect } from "react";
import './App.css';

function App() {

  const [citydata, setdata] = useState([])
  const [city1, setcity1] = useState("")
  const [city2, setcity2] = useState("")
  const [date1, setdate1] = useState("")
  const [time1,settime1]=useState("")
  
  async function getData() {
    const response = await fetch(`http://transport.opendata.ch/v1/connections?from=${city1}&to=${city2}&time=${time1}&fields[]=connections/from&date=${date1}&limit=10&fields[]=connections/to/station`)
    const data = await response.json()
    setdata(data)
    console.log(data)
  }

  useEffect(() => {
    getData()
  }, []);

  const handle = (e) => {
    e.preventDefault()
    getData()
    setcity1("")
    setcity2("")
    setdate1("")
    settime1("")
  }

  return (
    <div className="row">
      <h1 className="ms-3">SBB APP</h1>
     <div className="col-3">
        <input type="text" value={city1} onChange={(e) => setcity1(e.target.value)} className="form-control  m-3" placeholder="from"></input>
        <input type="text" value={city2} onChange={(e) => setcity2(e.target.value)} className="form-control  m-3"placeholder="to"></input>
        <input type="date"  value={date1} className="form-control m-3" onChange={(e)=> setdate1(e.target.value)}></input>
        <input type="time"  value={time1} className="form-control m-3" onChange={(e)=> settime1(e.target.value)}></input>
        <button type="button" className="btn btn-outline-danger ms-4 btn-lg" onClick={handle}>SEARCH</button>
      </div>
      <div className="col-4 ms-5 mt-1">
        {citydata.connections?.map((c,index) =>(
          <div key={index} className="mt-3">
            <h2>{c.from.location.name} &gt;&gt;&gt; {c.to.station.name}</h2>
            <h5>Departure :{c.from.departure}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

