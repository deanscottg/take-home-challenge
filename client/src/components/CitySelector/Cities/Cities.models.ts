export interface City {
  name: string
  country: string
  latitude: number
  longitude: number
}

export const CITIES: City[] = [
  {
    name: 'New York',
    country: 'United States',
    latitude: 0,
    longitude: 100,
  },
  {
    name: 'Miami',
    country: 'United States',
    latitude: 10,
    longitude: 130,
  },
  {
    name: 'Los Angelos',
    country: 'United States',
    latitude: 12,
    longitude: 122,
  },
]
