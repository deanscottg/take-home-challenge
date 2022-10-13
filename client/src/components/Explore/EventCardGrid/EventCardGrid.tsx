import React from 'react'
import {EVENTS} from '../Events/Events.models'
import EventCard from '../Events/EventCard'
import '../Events.styles.scss'
import {useEvents} from 'services/events/useEvents'
import {useSearchParams} from 'react-router-dom'
import {CityOption, TimeOption} from 'services/events/eventsService.model'

const EventCardGrid = () => {
  /** get the user preferences from the URL */
  const [searchParams] = useSearchParams()
  const when = (searchParams.get('t') ?? 'week') as TimeOption
  const where = (searchParams.get('c') ?? 'newyork') as CityOption

  /** start getting Events from useEvents now */
  const {data: events, status} = useEvents({when, where})

  return (
    <div className='EventCardGrid'>
      {events.map(event => (
        <EventCard event={event} key={event.name} />
      ))}
    </div>
  )
}

export default EventCardGrid
