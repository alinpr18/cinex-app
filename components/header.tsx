import Link from "next/link";
import { Search } from "./search";

interface HeaderProps {
	title?: string;
}

export const Header = ({ title }: HeaderProps) => {
	return (
		<>
			<header className="pt-11 px-6 flex flex-col gap-4">
				<h1 className="text-2xl font-extrabold">
					<Link href="/">{title ?? "Cinex"}</Link>
				</h1>
				<Search />
			</header>
		</>
	);
};
