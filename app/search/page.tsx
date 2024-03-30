import { Header } from "@/components/header";
import {
	MoviesSearchList,
	MoviesSearchListSkeleton,
} from "@/components/movies-search-list";
import { Suspense } from "react";

interface SearchPageProps {
	searchParams: {
		q: string;
	};
}

export default function SearchPage({ searchParams }: SearchPageProps) {
	const query = searchParams.q;
	return (
		<>
			<Header />
			<main>
				<section className="pt-8 px-6">
					<div className="grid grid-cols-2 gap-4">
						{query ? (
							<Suspense fallback={<MoviesSearchListSkeleton />}>
								<MoviesSearchList query={query} />
							</Suspense>
						) : null}
					</div>
				</section>
			</main>
		</>
	);
}
