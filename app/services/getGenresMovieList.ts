import { API_KEY, API_URL } from '../constants'

interface Genres {
  genres: Genre[]
}

export interface Genre {
  id: number
  name: string
}

export const getGenresMovieList = async (): Promise<Genre[]> => {
  const res = await fetch(`${API_URL}/genre/movie/list?${API_KEY}`)
  const data: Genres = await res.json()
  return data.genres
}
