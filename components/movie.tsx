import { IMAGE_PATH } from "@/lib/constants";
import Link from "next/link";

interface MovieProps {
	href: string;
	className: string;
	poster_path: string;
	title: string;
	width: number;
	height: number;
}

export const Movie = ({
	href,
	className,
	poster_path,
	title,
	width,
	height,
}: MovieProps) => {
	return (
		<>
			{poster_path ? (
				<Link href={href}>
					<img
						className={className}
						src={`${IMAGE_PATH}${poster_path}`}
						alt={title}
						width={width}
						height={height}
					/>
				</Link>
			) : null}
		</>
	);
};
