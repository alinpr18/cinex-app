import { fetchGenreMovieList, fetchMovieDetails } from "@/lib/themoviedb";
import Link from "next/link";
import { Skeleton } from "./skeleton";

export const GenresSkeleton = () => {
	const genresMovieList = Array(20)
		.fill(null)
		.map(() => ({
			id: crypto.randomUUID(),
		}));
	return (
		<>
			{genresMovieList.map((items) => (
				<li
					key={items.id}
					className="before:content-[''] before:rounded-md gap-3 before:bg-slate-500 before:w-[30px] before:h-[30px] flex items-center"
				>
					<Skeleton className="w-[120px] h-[30px]" />
				</li>
			))}
		</>
	);
};

export const GenresMoviesList = async () => {
	const genresMovieList = await fetchGenreMovieList();
	return (
		<>
			{genresMovieList.genres?.map(({ id, name }) => (
				<li
					key={id}
					className="before:content-[''] before:rounded-md gap-3 before:bg-slate-500 before:w-[30px] before:h-[30px] flex items-center"
				>
					<Link href={`/genre/${id}`}>{name}</Link>
				</li>
			))}
		</>
	);
};

export const GenresMovieDetails = async ({ movieId }: { movieId: number }) => {
	const genresMovieList = await fetchMovieDetails(movieId);
	return (
		<>
			{genresMovieList.genres?.map(({ id, name }) => (
				<li
					key={id}
					className="before:content-[''] before:rounded-md gap-3 before:bg-slate-500 before:w-[30px] before:h-[30px] flex items-center"
				>
					<Link href={`/genre/${id}`}>{name}</Link>
				</li>
			))}
		</>
	);
};
