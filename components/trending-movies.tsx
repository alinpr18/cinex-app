import { fetchTrendingMovies } from "@/lib/themoviedb";
import { Movie } from "./movie";
import { Skeleton } from "./skeleton";

export const TrendingMoviesHomeSkeleton = () => {
	const trendingMovies = Array(5)
		.fill(null)
		.map(() => ({
			id: crypto.randomUUID(),
		}));
	return (
		<>
			{trendingMovies.map((item) => (
				<Skeleton
					key={item.id}
					className="rounded-lg min-w-[200px] min-h-[300px]"
				/>
			))}
		</>
	);
};

export const TrendingMoviesSkeleton = () => {
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

export const TrendingMoviesHome = async () => {
	const trendingMovies = await fetchTrendingMovies();

	return (
		<>
			{trendingMovies.results?.slice(0, 5).map(({ id, poster_path, title }) => (
				<Movie
					key={id}
					href={`/movie/${id}`}
					className="rounded-lg min-w-[200px] min-h-[300px]"
					poster_path={poster_path}
					title={title}
					width={200}
					height={300}
				/>
			))}
		</>
	);
};

export const TrendingMovies = async () => {
	const trendingMovies = await fetchTrendingMovies();

	return (
		<>
			{trendingMovies.results?.map(({ id, poster_path, title }) => (
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
