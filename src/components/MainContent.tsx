import { Link } from "react-router-dom";
import { Blog } from "../pages/Blogs";

interface MainContentProps {
	blogs?: Blog[];
}

export default function MainContent({ blogs }: MainContentProps) {
	return (
		<main className="bg-black text-white flex pt-8 pl-8 pr-8 text-justify">
			{blogs ? (
				<div className=" w-full">
					{blogs.map((blog) => {
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
