import {
	GenresMoviesList,
	GenresSkeleton,
} from "@/components/genres-movies-list";
import { Header } from "@/components/header";
import {
	TrendingMoviesHome,
	TrendingMoviesHomeSkeleton,
} from "@/components/trending-movies";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
	return (
		<>
			<Header />
			<main>
				<section className="pt-12 px-6 flex flex-col gap-6">
					<div className="flex justify-between items-center">
						<h2 className="text-lg font-bold">Trending</h2>
						<Link href="/trending/movies" className="text-sm font-medium">
							See more
						</Link>
					</div>
					<div className="flex gap-4 overflow-auto">
						<Suspense fallback={<TrendingMoviesHomeSkeleton />}>
							<TrendingMoviesHome />
						</Suspense>
					</div>
				</section>
				<section className="pt-12 px-6 flex flex-col gap-4">
					<h2 className="text-lg font-bold">Genres</h2>
					<div>
						<ul className="grid gap-y-2 grid-cols-2">
							<Suspense fallback={<GenresSkeleton />}>
								<GenresMoviesList />
							</Suspense>
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}
