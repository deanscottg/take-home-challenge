import axios from 'axios'

import {GetEventsParams, KernelWtwEvent, WtwEvent} from './eventsService.model'
import {
  LA_EVENTS_TODAY,
  LA_EVENTS_WEEK,
  MIAMI_EVENTS_TODAY,
  MIAMI_EVENTS_WEEK,
  NEW_YORK_EVENTS_TODAY,
  NEW_YORK_EVENTS_WEEK,
} from './mockEvents'

/** request getEvents with the params the backend would use */
export const getEvents = async ({when, where}: GetEventsParams) => {
  /** 1. use those params to send the correct mock data  */
  // const response = {data: NEW_YORK_EVENTS_TODAY}
  const response = {data: getMockEventsForParams({when, where})}

  const mappedData: WtwEvent[] = response.data.map(event => ({...event, startUtc: new Date(event.startUtc)}))
  /** lost this part when youre ready to hit the real backend service */
  return Promise.resolve(mappedData)

  /** uncomment this part when you're ready to hit a real backend service */
  // const response = await axios.get<WtwEvent[]>(`${process.env.API_ROOT}/explore`)
  // return response.data
}

const getMockEventsForParams = ({when, where}: GetEventsParams): KernelWtwEvent[] => {
  if (when === 'today' && where === 'newyork') {
    return NEW_YORK_EVENTS_TODAY
  }
  if (when === 'week' && where === 'newyork') {
    return NEW_YORK_EVENTS_WEEK
  }
  if (when === 'today' && where === 'miami') {
    return MIAMI_EVENTS_TODAY
  }
  if (when === 'week' && where === 'miami') {
    return MIAMI_EVENTS_WEEK
  }

  if (when === 'today' && where === 'la') {
    return LA_EVENTS_TODAY
  }

  if (when === 'week' && where === 'la') {
    return LA_EVENTS_WEEK
  }
  return []
}
