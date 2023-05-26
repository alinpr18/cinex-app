import { LinkToBack } from '@/app/components/LinkToBack'
import { IMAGE_PATH } from '@/app/constants'
import { getMovieDetails } from '@/app/services/getMovieDetails'
import { getSimilarMovies } from '@/app/services/getSimilarMovies'
import Image from 'next/image'
import Link from 'next/link'

export default async function MoviePage ({ params }: { params: { id: string } }): Promise<JSX.Element> {
  const movie = await getMovieDetails({ movieId: Number(params.id) })
  const similarMovies = await getSimilarMovies({ movieId: Number(params.id) })

  console.log(movie)

  return (
    <>
      <header className='relative flex'>
        <Image className='w-full h-full' src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} width={320} height={320} />
        <LinkToBack className='text-2xl pt-11 px-6 w-fit absolute' />
      </header>

      <main className='bg-black'>
        <section className='bg-white flex flex-col gap-4 py-8 px-6 rounded-t-2xl'>
          <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-extrabold'>{movie.title}</h2>
            <span className="before:content-['🌟'] flex items-center font-bold">{movie.vote_average}</span>
          </div>
          <p>{movie.overview}</p>
          <ul className='grid grid-cols-2 gap-y-2'>
            {movie.genres.map(({ name, id }) => (
              <li key={id} className="before:content-[''] before:rounded-md gap-3 before:bg-slate-500 before:w-[30px] before:h-[30px] flex items-center">
                <Link href={`/category/${id}`}>{name}</Link>
              </li>
            ))}
          </ul>
          <section className='pt-2 flex flex-col gap-4'>
            <h2 className='text-lg font-bold'>Similar movies</h2>
            <ul className='flex gap-4 overflow-auto'>
              {similarMovies.map(({ id, poster_path: url, title }) => (
                (url != null)
                  ? (
                    <Link key={id} href={`/movie/${id}`}>
                      <Image className='rounded-lg max-w-[125px] h-full' src={`${IMAGE_PATH}${url}`} width={125} height={125} alt={title} />
                    </Link>
                    )
                  : null
              ))}
            </ul>
          </section>
        </section>
      </main>
    </>
  )
}
