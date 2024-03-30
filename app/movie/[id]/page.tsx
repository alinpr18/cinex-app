import { GenresMovieDetails } from "@/components/genres-movies-list";
import { MovieTitle } from "@/components/movie-title";
import { PosterMovie } from "@/components/poster-movie";
import { SimilarMovies } from "@/components/similar-movies";

export default async function MoviePage({
	params,
}: { params: { id: string } }) {
	const movieId = Number(params.id);
	return (
		<>
			<PosterMovie movieId={movieId} />
			<main className="bg-black">
				<section className="bg-white flex flex-col gap-4 py-8 px-6 rounded-t-2xl">
					<MovieTitle movieId={movieId} />
					<ul className="grid grid-cols-2 gap-y-2">
						<GenresMovieDetails movieId={movieId} />
					</ul>
					<section className="pt-2 flex flex-col gap-4">
						<h2 className="text-lg font-bold">Similar movies</h2>
						<ul className="flex gap-4 overflow-auto">
							<SimilarMovies movieId={movieId} />
						</ul>
					</section>
				</section>
			</main>
		</>
	);
}
