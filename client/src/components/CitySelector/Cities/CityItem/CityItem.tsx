import React from 'react'
import {useNavigate} from 'react-router-dom'

import {City} from '../Cities.models'

const CityItem = ({city}: {city: City}) => {
  const navigate = useNavigate()
  return (
    <div className='gold' onClick={() => navigate(`/explore?c=${city.value}&t=week`)}>
      {city.name}
    </div>
  )
}

export default CityItem
