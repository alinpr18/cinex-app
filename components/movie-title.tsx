import { fetchMovieDetails } from "@/lib/themoviedb";

export const MovieTitle = async ({ movieId }: { movieId: number }) => {
	const movieDetails = await fetchMovieDetails(movieId);

	return (
		<>
			<div className="flex justify-between items-center">
				<h2 className="text-2xl font-extrabold">{movieDetails.title}</h2>
				<span className="before:content-['🌟'] flex items-center font-bold">
					{movieDetails.vote_average}
				</span>
			</div>
			<p>{movieDetails.overview}</p>
		</>
	);
};
