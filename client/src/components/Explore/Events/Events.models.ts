import {addDays} from 'date-fns'

export interface Event {
  name: string
  flyer: string
  groupAvi: string
  timezone: string
  startUtc: Date
  endUtc: Date
  url: string
  venueName: string
  groupName: string
  location: unknown
}

export const EVENTS: Event[] = [
  {
    name: 'Tchami',
    flyer:
      'https://cdn.vor.us/event/427440/og/54196e20b72a4790af6505eeddc6470c.image!jpeg.785607.jpg.ddp_tch_stl1080.jpg',
    groupAvi:
      'https://play-lh.googleusercontent.com/g8tjhMtqa1Bacw6KzQ8FmPbPXRh__CCRJbGKnJo723i3Br-YPd5w2hkPS2a1Ni2AdbM',
    timezone: '',
    startUtc: addDays(new Date(), 7),
    endUtc: addDays(new Date(), 8),
    url: '',
    venueName: 'Terminal 5',
    groupName: '',
    location: 'NYC',
  },
  {
    name: 'Ugly God',
    flyer:
      'data:image/jpeg;base64,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',
    groupAvi:
      'https://play-lh.googleusercontent.com/g8tjhMtqa1Bacw6KzQ8FmPbPXRh__CCRJbGKnJo723i3Br-YPd5w2hkPS2a1Ni2AdbM',
    timezone: '',
    startUtc: addDays(new Date(), 7),
    endUtc: addDays(new Date(), 8),
    url: '',
    venueName: 'Poop Zone',
    groupName: '',
    location: 'Nyc',
  },
  {
    name: 'John Summit',
    flyer: 'https://cdn.relentlessbeats.com/wp-content/uploads/2021/04/rb_js_1080.png',
    groupAvi:
      'https://play-lh.googleusercontent.com/g8tjhMtqa1Bacw6KzQ8FmPbPXRh__CCRJbGKnJo723i3Br-YPd5w2hkPS2a1Ni2AdbM',
    timezone: '',
    startUtc: addDays(new Date(), 7),
    endUtc: addDays(new Date(), 8),
    url: '',
    venueName: 'Brooklyn Mirage',
    groupName: '',
    location: 'Nyc',
  },
  {
    name: 'Tiesto',
    flyer:
      'https://imgproxy.ra.co/_/quality:75/plain/https://images.ra.co/4c6e7041a1aa34d63ff7d937e8b0458a0f150a8e.png',
    groupAvi:
      'https://play-lh.googleusercontent.com/g8tjhMtqa1Bacw6KzQ8FmPbPXRh__CCRJbGKnJo723i3Br-YPd5w2hkPS2a1Ni2AdbM',
    timezone: '',
    startUtc: addDays(new Date(), 7),
    endUtc: addDays(new Date(), 8),
    url: '',
    venueName: 'Space',
    groupName: '',
    location: 'Mia',
  },
  {
    name: 'Migos',
    flyer: 'https://www.clubcrawlers.com/designedit/cache/events/23001/1000_flyer_Artwork_Square-2.jpg',
    groupAvi:
      'https://play-lh.googleusercontent.com/g8tjhMtqa1Bacw6KzQ8FmPbPXRh__CCRJbGKnJo723i3Br-YPd5w2hkPS2a1Ni2AdbM',
    timezone: '',
    startUtc: addDays(new Date(), 7),
    endUtc: addDays(new Date(), 8),
    url: '',
    venueName: 'TreeHouse Miami',
    groupName: '',
    location: 'Mia',
  },
  {
    name: 'Avicii (hologram)',
    flyer: 'https://www.clubcrawlers.com/designedit/cache/events/9390/1000_flyer_aviccii.jpg',
    groupAvi:
      'https://play-lh.googleusercontent.com/g8tjhMtqa1Bacw6KzQ8FmPbPXRh__CCRJbGKnJo723i3Br-YPd5w2hkPS2a1Ni2AdbM',
    timezone: '',
    startUtc: addDays(new Date(), 7),
    endUtc: addDays(new Date(), 8),
    url: '',
    venueName: 'SoFi Stadium',
    groupName: '',
    location: 'La',
  },
  {
    name: 'Kaskade',
    flyer: 'https://taogroup.com/wp-content/uploads/2022/06/220622_Marquee_Kaskade_1080x1350.jpg',
    groupAvi:
      'https://play-lh.googleusercontent.com/g8tjhMtqa1Bacw6KzQ8FmPbPXRh__CCRJbGKnJo723i3Br-YPd5w2hkPS2a1Ni2AdbM',
    timezone: '',
    startUtc: addDays(new Date(), 7),
    endUtc: addDays(new Date(), 8),
    url: '',
    venueName: 'NOS Center',
    groupName: '',
    location: 'La',
  },
]
