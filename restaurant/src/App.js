import React, {useState} from 'react'
import Restaurant  from './Restaurant';
import Nav from './Nav';
import './App.css';

function App() {
const [restaurant,setRestaurant]=useState([])

  return (
    <div className="restaurants">
      <Nav 
      restaurant={restaurant}
      setRestaurant={setRestaurant}
      />
      {restaurant.map(res => <Restaurant restaurant={res}/>)}
     
    </div>
  );
}

export default App;
