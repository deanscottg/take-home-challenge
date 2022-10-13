import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './assets/stylesheets/styles.scss'
import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'
import Explore from 'components/Explore/Explore'
import CitySelector from 'components/CitySelector'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CitySelector />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
