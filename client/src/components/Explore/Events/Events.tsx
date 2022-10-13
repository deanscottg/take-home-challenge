import React from 'react'

import {useEvents} from 'services/events/useEvents'

import ExploreNavBar from '../ExploreNavBar/ExploreNavBar'

const Events = () => {
  const {status, data: events} = useEvents()

  return (
    <div>
      <div>
        <ExploreNavBar />
      </div>
    </div>
  )
}

export default Events
