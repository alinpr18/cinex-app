import { IMAGE_PATH } from "@/lib/constants";
import { fetchMovieDetails } from "@/lib/themoviedb";
import { ButtonToBack } from "./button-to-back";

export const PosterMovie = async ({ movieId }: { movieId: number }) => {
	const movieDetails = await fetchMovieDetails(movieId);

	return (
		<>
			<header className="relative flex">
				<img
					className="w-full h-full"
					src={`${IMAGE_PATH}${movieDetails.poster_path}`}
					alt={movieDetails.title}
					width={425}
					height={563}
				/>
				<ButtonToBack className="text-2xl pt-11 px-6 w-fit absolute" />
			</header>
		</>
	);
};
