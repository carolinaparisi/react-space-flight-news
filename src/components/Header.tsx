import { Link, useLocation } from "react-router-dom";

const routes = [
	{
		path: "/",
		name: "HOME",
	},
	{
		path: "/blogs",
		name: "BLOGS",
	},
	{
		path: "/articles",
		name: "ARTICLES",
	},
	{
		path: "/reports",
		name: "REPORTS",
	},
];

export default function Header() {
	const location = useLocation();
	console.log(location.pathname);

	const handleSelected = (path: string) => {
		if (location.pathname === path) {
			return "text-white";
		}
		return "text-gray";
	};

	return (
		<header className="bg-black h-20 flex text-sm font-bold gap-12 pl-8 items-center">
			{routes.map((route, index) => {
				return (
					<Link
						key={index}
						to={route.path}
						className={handleSelected(route.path)}>
						{route.name}
					</Link>
				);
			})}
		</header>
	);
}
