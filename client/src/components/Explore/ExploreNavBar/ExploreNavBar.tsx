import React, {useEffect, useState} from 'react'
import '../Events.styles.scss'
import {useSearchParams, useNavigate} from 'react-router-dom'
import {CityOption, TimeOption} from 'services/events/eventsService.model'
import e from 'express'

const ExploreNavBar = () => {
  const [searchParams] = useSearchParams()
  const where = (searchParams.get('c') ?? 'newyork') as CityOption
  const when = (searchParams.get('t') ?? 'week') as TimeOption

  const navigate = useNavigate()
  const todayButtonHandler = () => {
    navigate(`/explore?c=${where}&t=today`)
    window.location.reload()
  }
  const weekButtonHandler = () => {
    navigate(`/explore?c=${where}&t=week`)
    window.location.reload()
  }

  return (
    <div className='Explore-body-main-nav'>
      <div className='Explore-body-main-nav-right'>
        <div
          className={`Explore-body-main-nav-button ${when === 'week' ? 'Selected' : ''}`}
          onClick={weekButtonHandler}>
          This Week
        </div>
        <div
          className={`Explore-body-main-nav-button ${when === 'today' ? 'Selected' : ''}`}
          onClick={todayButtonHandler}>
          Today
        </div>
      </div>
    </div>
  )
}

export default ExploreNavBar
