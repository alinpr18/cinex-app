import { LinkToBack } from '@/app/components/LinkToBack'
import { Search } from '@/app/components/Search'
import { IMAGE_PATH } from '@/app/constants'
import { getTrendingMovies } from '@/app/services/getTrendingMovies'
import Image from 'next/image'
import Link from 'next/link'

export default async function MoviesPage (): Promise<JSX.Element> {
  const trending = await getTrendingMovies()

  return (
    <>
      <header className='pt-11 px-6 flex flex-col gap-4'>
        <div className='flex gap-2'>
          <LinkToBack className='text-2xl w-fit' />
          <h1 className='text-2xl font-extrabold'>Trending</h1>
        </div>
        <Search />
      </header>

      <main>
        <section className='pt-8 px-6 flex flex-col gap-6'>
          <div className='grid grid-cols-2 gap-4'>
            {trending.map(({ id, poster_path: url, title }) => (
              <Link key={id} href={`/movie/${id}`}>
                <Image className='rounded-lg' src={`${IMAGE_PATH}${url}`} width={200} height={200} alt={title} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
