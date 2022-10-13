import {useEffect, useState} from 'react'

import {WtwEvent} from './eventsService.model'
import {getEvents} from './getEvents'

export const useEvents = () => {
  const [response, setResponse] = useState<WtwEvent[]>([])
  const [status, setStatus] = useState<'LOADING' | 'SUCCESS'>('LOADING')

  useEffect(() => {
    const loadEvents = async () => {
      const response = await getEvents()
      setResponse(response)
      setStatus('SUCCESS')
    }
    loadEvents()
  }, [])

  return {status, data: response}
}
