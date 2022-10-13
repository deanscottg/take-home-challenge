import axios from 'axios'
import {GetEventsParams, KernelWtwEvent, WtwEvent} from './eventsService.model'

export const getEvents = async ({when, where}: GetEventsParams) => {
  const response = await axios.get<KernelWtwEvent[]>(`${process.env.API_ROOT}/events?c=${where}&t=${when}`)
  const mappedData: WtwEvent[] = response.data.map(event => ({...event, startUtc: new Date(event.startUtc)}))

  return mappedData
}
