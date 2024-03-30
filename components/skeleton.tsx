import type { HtmlHTMLAttributes } from "react";

interface SkeletonProps {
	className: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
	return (
		<>
			<div className={`animate-pulse rounded-md bg-slate-100 ${className}`} />
		</>
	);
};
