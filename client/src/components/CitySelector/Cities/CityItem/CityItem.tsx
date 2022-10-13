import React from 'react'

import {City} from '../Cities.models'

const CityItem = ({city}: {city: City}) => {
  return <div className='gold'>{city.name}</div>
}

export default CityItem
