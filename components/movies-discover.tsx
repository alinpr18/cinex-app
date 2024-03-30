import { fetchMovieDiscover } from "@/lib/themoviedb";
import { Movie } from "./movie";
import { Skeleton } from "./skeleton";

export const MovieDiscoverSkeleton = () => {
	const moviesDiscover = Array(20)
		.fill(null)
		.map(() => ({
			id: crypto.randomUUID(),
		}));
	return (
		<>
			{moviesDiscover.map((item) => (
				<Skeleton key={item.id} className="rounded-lg w-[181px] h-[271px]" />
			))}
		</>
	);
};

export const MoviesDiscover = async ({ genreId }: { genreId: string }) => {
	const moviesDiscover = await fetchMovieDiscover(genreId);
	return (
		<>
			{moviesDiscover.results?.map(({ id, poster_path, title }) => (
				<Movie
					key={id}
					href={`/movie/${id}`}
					className="rounded-lg h-full"
					poster_path={poster_path}
					title={title}
					width={181}
					height={271}
				/>
			))}
		</>
	);
};
