import { API_KEY, API_URL } from '../constants'

interface MovieDiscover {
  page: number
  results: Result[]
  total_pages: number
  total_results: number
}

interface Result {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const getMovieDiscover = async ({ genreId }: { genreId: string }): Promise<Result[]> => {
  const res = await fetch(`${API_URL}/discover/movie?with_genres=${genreId}&${API_KEY}`)
  const data: MovieDiscover = await res.json()
  return data.results
}
