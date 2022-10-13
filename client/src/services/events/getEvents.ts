import axios from 'axios'

import {WtwEvent} from './eventsService.model'

export const getEvents = async () => {
  const response = await axios.get<WtwEvent[]>(`${process.env.API_ROOT}/explore`)
  return response.data
}
