export interface City {
  value: string
  name: string
  country: string
  latitude: number
  longitude: number
}

export const CITIES: City[] = [
  {
    value: 'newyork',
    name: 'New York',
    country: 'United States',
    latitude: 0,
    longitude: 100,
  },
  {
    value: 'miami',
    name: 'Miami',
    country: 'United States',
    latitude: 10,
    longitude: 130,
  },
  {
    value: 'la',
    name: 'Los Angeles',
    country: 'United States',
    latitude: 12,
    longitude: 122,
  },
]
