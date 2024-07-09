import { Link, useLocation } from "react-router-dom";
import { Blog } from "../pages/Blogs";
import { Article } from "../pages/Articles";
import { Report } from "../pages/Reports";
import Pagination from "./Pagination";
import { useState } from "react";

interface MainContentProps {
	mainData?: Blog[] | Article[] | Report[];
	count?: number;
	next?: string | null;
	previous?: string | null;
	pagination?: (nextOrPrevious: string) => void;
	filter?: (input: string) => void;
	isLoading?: boolean;
	isFiltered?: boolean;
	isOrdered?: boolean;
	setOrdered?: (state: boolean) => void;
}

export default function MainContent({
	mainData,
	count,
	next,
	previous,
	pagination,
	filter,
	isLoading,
	isFiltered,
	isOrdered,
	setOrdered,
}: MainContentProps) {
	const location = useLocation();

	const [searchInput, setSearchInput] = useState("");

	return (
		<main className="bg-black text-white flex pt-8 pl-8 pr-8 text-justify min-h-40">
			{/* blogs.length verifies if there's is already some blog to show the input together with the rest of the elements */}
			{mainData &&
			count &&
			pagination &&
			filter &&
			mainData.length > 0 &&
			!isLoading ? (
				<div className=" w-full">
					<div className="flex place-content-between mb-8">
						{!isOrdered ? (
							<div className="flex flex-col w-1/5 gap-2 justify-center">
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
								<div className=" text-gray text-xs">
									Found {count} {location.pathname.split("/")[1]}.
								</div>
							</div>
						) : (
							<div className="m-8"></div>
						)}
						<div className="flex flex-col justify-start">
							{!isFiltered && (
								<button
									className="bg-blue p-2 rounded-md"
									onClick={() => {
										setOrdered && setOrdered(!isOrdered);
									}}>
									{isOrdered ? "Order by newest" : "Order by oldest"}
								</button>
							)}
						</div>
					</div>
					{mainData.slice(1).map((data) => {
						return (
							<Link key={data.id} to={data.url} target="_blank">
								<div
									className="border-b border-white mb-6 flex flex-col gap-2"
									key={data.id}>
									<div className="font-bold text-xl text-blue">
										{data.title}
									</div>
									<div className="line-clamp-2">{data.summary}</div>
									<div className="pb-6 text-gray">
										Published by {data.news_site},{" "}
										{data.published_at.split("T")[0]}
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
				<div className={isLoading || mainData ? "hidden" : "w-3/5 mb-8"}>
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
