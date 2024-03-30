import { Header } from "@/components/header";
import {
	TrendingMovies,
	TrendingMoviesSkeleton,
} from "@/components/trending-movies";
import { Suspense } from "react";

export default function MoviesPage() {
	return (
		<>
			<Header />
			<main>
				<section className="pt-8 px-6 flex flex-col gap-6">
					<div className="grid grid-cols-2 gap-4">
						<Suspense fallback={<TrendingMoviesSkeleton />}>
							<TrendingMovies />
						</Suspense>
					</div>
				</section>
			</main>
		</>
	);
}
