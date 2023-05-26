import { LinkToBack } from '@/app/components/LinkToBack'
import { IMAGE_PATH } from '@/app/constants'
import { getGenreMovieList } from '@/app/services/getGenreMovieList'
import { getMovieDiscover } from '@/app/services/getMovieDiscover'
import Image from 'next/image'
import Link from 'next/link'

export default async function GenrePage ({ params }: { params: { id: string } }): Promise<JSX.Element> {
  const movies = await getMovieDiscover({ genreId: params.id })
  const genreMovieList = await getGenreMovieList()

  const filterGenre = genreMovieList.filter((movie) => movie.id === Number(params.id))

  return (
    <>
      <header className='pt-11 px-6 flex gap-2'>
        <LinkToBack className='text-2xl w-fit' />
        {filterGenre.map(({ name, id }) => (
          <h1 className='text-2xl font-extrabold' key={id}>{name}</h1>
        ))}
      </header>
      <section className='pt-8 px-6'>
        <div className='grid grid-cols-2 gap-4'>
          {movies.map(({ poster_path: url, id, title }) => (
            <Link key={id} href={`/movie/${id}`}>
              <Image className='rounded-lg h-full' src={`${IMAGE_PATH}${url}`} alt={title} width={200} height={200} />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
