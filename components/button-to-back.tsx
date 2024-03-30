"use client";

import { useRouter } from "next/navigation";

export const ButtonToBack = ({ ...props }) => {
	const router = useRouter();
	return (
		<button type="button" onClick={() => router.back()} {...props}>
			⬅️
		</button>
	);
};
