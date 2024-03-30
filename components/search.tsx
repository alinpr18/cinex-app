"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export const Search = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const router = useRouter();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const query = searchQuery.trim();
		if (query.length < 1) return;
		const encodedSearchQuery = encodeURI(query);
		router.push(`/search?q=${encodedSearchQuery}`);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="rounded-lg overflow-auto flex">
				<input
					onChange={handleChange}
					placeholder="Marvel"
					className="bg-[#EEEAF2] px-4 py-2 w-full"
					type="text"
				/>
				<button
					type="submit"
					className="w-[51px] bg-black flex items-center justify-center"
				>
					🔍
				</button>
			</form>
		</>
	);
};
