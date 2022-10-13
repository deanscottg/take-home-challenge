import React from 'react'

import './CitySelector.styles.scss'

import Cities from './Cities/Cities'
import Prompt from './Prompt'

const CitySelector = () => {
  return (
    <div className='CitySelector'>
      <Prompt />
      <div>
        <Cities />
      </div>
    </div>
  )
}

export default CitySelector
