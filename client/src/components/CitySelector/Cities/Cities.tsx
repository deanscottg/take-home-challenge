import React from 'react'

import {CITIES} from './Cities.models'
import CityItem from './CityItem/CityItem'

const Cities = () => {
  return (
    <div className='CitySelector-cities'>
      {CITIES.map(city => (
        <CityItem city={city} key={city.name} />
      ))}
      <div>NEAR ME</div>
    </div>
  )
}

export default Cities
