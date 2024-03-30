import { fetchSearchMovies } from "@/lib/themoviedb";
import { Movie } from "./movie";
import { Skeleton } from "./skeleton";

export const MoviesSearchListSkeleton = () => {
	const trendingMovies = Array(20)
		.fill(null)
		.map(() => ({
			id: crypto.randomUUID(),
		}));
	return (
		<>
			{trendingMovies.map((item) => (
				<Skeleton key={item.id} className="rounded-lg w-[181px] h-[271px]	" />
			))}
		</>
	);
};

export const MoviesSearchList = async ({ query }: { query: string }) => {
	const searchMovies = await fetchSearchMovies(query);
	return (
		<>
			{searchMovies.results?.map(({ id, poster_path, title }) => (
				<Movie
					key={id}
					href={`/movie/${id}`}
					className="rounded-lg"
					poster_path={poster_path}
					title={title}
					width={181}
					height={271}
				/>
			))}
		</>
	);
};
