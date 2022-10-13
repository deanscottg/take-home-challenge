import {useEffect, useState} from 'react'

import {GetEventsParams, WtwEvent} from './eventsService.model'
import {getEvents} from './getEvents'

export const useEvents = ({when, where}: GetEventsParams) => {
  const [response, setResponse] = useState<WtwEvent[]>([])
  const [status, setStatus] = useState<'LOADING' | 'SUCCESS'>('LOADING')

  useEffect(() => {
    const loadEvents = async () => {
      const response = await getEvents({when, where})
      setResponse(response)
      setStatus('SUCCESS')
    }
    loadEvents()
  }, [])

  return {status, data: response}
}
