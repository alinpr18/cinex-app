import { fetchSimilarMovies } from "@/lib/themoviedb";
import { Movie } from "./movie";

export const SimilarMovies = async ({ movieId }: { movieId: number }) => {
	const similarMovies = await fetchSimilarMovies(movieId);
	return (
		<>
			{similarMovies.results?.map(({ id, poster_path, title }) => (
				<Movie
					key={id}
					href={`/movie/${id}`}
					className="rounded-lg min-w-[125px] h-full"
					poster_path={poster_path}
					title={title}
					width={125}
					height={125}
				/>
			))}
		</>
	);
};
