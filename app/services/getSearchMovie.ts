import { API_KEY, API_URL } from '../constants'

interface SearchMovie {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

interface Result {
  adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path?: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const getSearchMovie = async ({ query }: { query: string }): Promise<Result[]> => {
  const res = await fetch(`${API_URL}/search/movie?query=${query}&${API_KEY}`)
  const data: SearchMovie = await res.json()
  return data.results
}
