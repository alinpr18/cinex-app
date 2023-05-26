import Link from 'next/link'
import { SearchInput } from '../components/SearchInput'
import { getSearchMovie } from '../services/getSearchMovie'
import Image from 'next/image'
import { IMAGE_PATH } from '../constants'
import { LinkToBack } from '../components/LinkToBack'

export default async function SearchPage (params: { searchParams: { q: string } }): Promise<JSX.Element> {
  const data = await getSearchMovie({ query: params.searchParams.q })

  return (
    <>
      <header className='pt-11 px-6 flex flex-col gap-4'>
        <LinkToBack className='text-2xl w-fit' />
        <SearchInput />
      </header>

      <main>
        <section className='pt-8 px-6'>
          <div className='grid grid-cols-2 gap-4'>
            {
              data.map(({ id, poster_path: url, title }) => (
                (url != null)
                  ? (
                    <Link key={id} href={`/movie/${id}`}>
                      <Image className='rounded-lg' src={`${IMAGE_PATH}${url}`} width={200} height={200} alt={title} />
                    </Link>
                    )
                  : null
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}
