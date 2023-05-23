import { API_KEY, API_URL } from '../constants'

interface SimilarMovies {
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

export const getSimilarMovies = async ({ movieId }: { movieId: number }): Promise<Result[]> => {
  const res = await fetch(`${API_URL}/movie/${movieId}/similar?${API_KEY}`)
  const data: SimilarMovies = await res.json()
  return data.results
}
