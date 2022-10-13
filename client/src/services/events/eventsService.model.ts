interface BaseWtwEvent {
  name: string
  flyer: string
  groupAvi: string
  timezone: string
  url: string
  venueName: string
  groupName?: string
}

export interface KernelWtwEvent extends BaseWtwEvent {
  startUtc: string
}

export interface WtwEvent extends BaseWtwEvent {
  startUtc: Date
}

export type TimeOption = 'week' | 'today'
export type CityOption = 'miami' | 'newyork' | 'la'

export interface GetEventsParams {
  when: TimeOption
  where: CityOption /** these are probably wrong for what posh uses */
}
