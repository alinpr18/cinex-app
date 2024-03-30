import { Header } from "@/components/header";
import {
	MovieDiscoverSkeleton,
	MoviesDiscover,
} from "@/components/movies-discover";
import { Suspense } from "react";

export default function GenrePage({ params }: { params: { id: string } }) {
	const genreId = params.id;
	return (
		<>
			<Header />
			<main>
				<section className="pt-8 px-6">
					<div className="grid grid-cols-2 gap-4">
						<Suspense fallback={<MovieDiscoverSkeleton />}>
							<MoviesDiscover genreId={genreId} />
						</Suspense>
					</div>
				</section>
			</main>
		</>
	);
}
