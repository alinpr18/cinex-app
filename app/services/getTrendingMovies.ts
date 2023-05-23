import { API_KEY, API_URL } from '../constants'

interface Treding {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

interface Result {
  adult: boolean
  backdrop_path: string
  id: number
  title: string
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  media_type: string
  genre_ids: number[]
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const getTrendingMovies = async (): Promise<Result[]> => {
  const res = await fetch(`${API_URL}/trending/movie/day?${API_KEY}`)
  const data: Treding = await res.json()
  return data.results
}
