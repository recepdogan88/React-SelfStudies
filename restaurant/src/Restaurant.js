import React from 'react'

export default function Restaurant({restaurant}) {
  return (
    <div className='restaurantDiv'>
        <div className='restaurant'>
            <div className='logo'>
                <img src={restaurant.logo}/>
            </div>
            <div className='info'>
                <div className='nametype'>
                        <h1 className='name'>{restaurant.name}</h1>
                        <h2 className='name'>{restaurant.type}</h2>
                </div>
                <div className='description'>{restaurant.description}</div>
                <div className='adres'>{restaurant.address}</div>
                <div className="restaurantDaysDiv">
                  <div>Days</div>
            <div className='days'>
                {Object.keys(restaurant.hours).map(day =><p key={day} style={{color:restaurant.hours[day].is_closed ?"tomato":"green"}} className='day'>{day}</p>)}
            </div>
            </div>
            </div>
            
        </div>
        
    </div>
  )
}
