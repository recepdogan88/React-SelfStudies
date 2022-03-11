
import './App.css';

export default function Nav({restaurant,setRestaurant}) {


const fetchRestaurant = async ()=>{
    const res=await fetch ("https://random-data-api.com/api/restaurant/random_restaurant")
    const data=await res.json()
    setRestaurant([...restaurant,data])
    console.log(data)
}

  return (
    <div className='navbar'>
        <button className='addnewrestaurant' onClick={fetchRestaurant}>Add RESTAURANT</button>
    </div>
  )
}
