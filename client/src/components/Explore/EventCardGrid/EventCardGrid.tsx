import React from 'react'
import {EVENTS} from '../Events/Events.models'
import EventCard from '../Events/EventCard'
import '../Events.styles.scss'

const EventCardGrid = () => {
  return (
    <div className='EventCardGrid'>
      {EVENTS.map(event => (
        <EventCard event={event} key={event.name} />
      ))}
    </div>
  )
}

export default EventCardGrid
