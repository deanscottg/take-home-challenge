import React from 'react'
import './EventCard.styles.scss'
import {format} from 'date-fns'
import {WtwEvent} from 'services/events/eventsService.model'

const EventCard = ({event}: {event: WtwEvent}) => {
  return (
    <div
      className='EventCard'
      style={{
        backgroundImage: `url(${event.flyer})`,
      }}>
      <div className='EventCard-filter' />
      <div className='EventCard-info'>
        <div className='EventCard-date'>
          <div className='EventCard-dotw'>{format(event.startUtc, 'EEE')}</div>
        </div>
        <div>
          <div className='EventCard-name'>{event.name}</div>
          <div className='EventCard-location'>{event.venueName}</div>
        </div>
      </div>
      <img className='EventCard-organizer' src={event.groupAvi} />{' '}
    </div>
  )
}

export default EventCard
