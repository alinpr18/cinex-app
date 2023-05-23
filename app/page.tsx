import Image from 'next/image'
import { getGenresMovieList } from './services/getGenresMovieList'
import { getTrendingMovies } from './services/getTrendingMovies'
import { Search } from './components/Search'
import Link from 'next/link'
import { IMAGE_PATH } from './constants'

export default async function Home (): Promise<JSX.Element> {
  const genres = await getGenresMovieList()
  const trending = await getTrendingMovies()
  return (
    <>
      <header className='pt-11 px-6 flex flex-col gap-4'>
        <h1 className='text-2xl font-extrabold'>Cinex</h1>
        <Search />
      </header>

      <main>
        <section className='pt-12 px-6 flex flex-col gap-6'>
          <div className='flex justify-between items-center'>
            <h2 className='text-lg font-bold'>Trending</h2>
            <Link href='/trending/movies' className='text-sm font-medium'>See more</Link>
          </div>
          <div className='flex gap-4 overflow-auto'>
            {trending.slice(0, 5).map(({ id, poster_path: url, title }) => (
              <Link key={id} href={`/movie/${id}`}>
                <Image className='rounded-lg max-w-[200px] h-[300px]' src={`${IMAGE_PATH}${url}`} width={200} height={200} alt={title} />
              </Link>
            ))}
          </div>
        </section>

        <section className='pt-12 px-6 flex flex-col gap-4'>
          <h2 className='text-lg font-bold'>Categories</h2>
          <div>
            <ul className='grid gap-y-2 grid-cols-2'>
              {genres.map(({ name, id }) => (
                <li key={id} className="before:content-[''] before:rounded-md gap-3 before:bg-slate-500 before:w-[30px] before:h-[30px] flex items-center">
                  <Link href={`/category/${id}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
