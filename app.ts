import express from 'express'
import cors from 'cors'
import { CityOption, GetEventsParams, KernelWtwEvent, TimeOption, WtwEvent } from './client/src/services/events/eventsService.model'
import {
  LA_EVENTS_TODAY,
  LA_EVENTS_WEEK,
  MIAMI_EVENTS_TODAY,
  MIAMI_EVENTS_WEEK,
  NEW_YORK_EVENTS_TODAY,
  NEW_YORK_EVENTS_WEEK,
} from './client/src/services/events/mockEvents'

const app = express()
app.use(cors())

app.get('/events', (req, res) => {
    const where = (req.query.c ?? 'newyork') as CityOption;
    const when = (req.query.t ?? 'week') as TimeOption;

    /** @TODO replace stubs with call to MongoDB */
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

    const results = getMockEventsForParams({ where, when })

    res.send(results)
})

export default app

