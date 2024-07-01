import { Link, useLocation } from "react-router-dom";
import { Blog } from "../pages/Blogs";
import Pagination from "./Pagination";
import { ChangeEvent, useState } from "react";

interface MainContentProps {
	blogs?: Blog[];
	count?: number;
	next?: string | null;
	previous?: string | null;
	pagination?: (nextOrPrevious: string) => void;
	filter?: (input: string) => void;
}

export default function MainContent({
	blogs,
	count,
	next,
	previous,
	pagination,
	filter,
}: MainContentProps) {
	const location = useLocation();

	const [searchInput, setSearchInput] = useState("");

	return (
		<main className="bg-black text-white flex pt-8 pl-8 pr-8 text-justify">
			{/* blogs.length verifies if there's is already some blog to show the input together with the rest of the elements */}
			{blogs && count && pagination && filter && blogs.length > 0 ? (
				<div className=" w-full">
					<div className="flex flex-col w-1/5 gap-2">
						<input
							type="text"
							className="rounded-md h-9 text-dark_gray p-2 font-light italic"
							placeholder="Search..."
							value={searchInput}
							onChange={(event) => {
								setSearchInput(event.target.value);
							}}
							onKeyDown={(event) => {
								if (event.key === "Enter") {
									filter(searchInput);
									setSearchInput("");
								}
							}}
						/>
						<div className="mb-6 text-gray text-xs">
							Found {count} {location.pathname.split("/")[1]}.
						</div>
					</div>
					{blogs.slice(1).map((blog) => {
						return (
							<Link key={blog.id} to={blog.url} target="_blank">
								<div
									className="border-b border-white mb-6 flex flex-col gap-2"
									key={blog.id}>
									<div className="font-bold text-xl text-blue">
										{blog.title}
									</div>
									<div>{blog.summary}</div>
									<div className="pb-6 text-gray">
										Published by {blog.news_site},{" "}
										{blog.published_at.split("T")[0]}
									</div>
								</div>
							</Link>
						);
					})}
					<Pagination
						count={count}
						next={next || null}
						previous={previous || null}
						pagination={pagination}
					/>
				</div>
			) : (
				<div className="w-3/5 mb-8">
					This website provides information on space launches and missions,
					making it a must-have for spaceflight enthusiasts. Here, you will find
					blogs, articles, and even reports on these events. The goal is to
					inform and update those interested in this niche, offering an
					expository take on the field.
				</div>
			)}
		</main>
	);
}
7;
