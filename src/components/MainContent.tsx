import { Blog } from "../pages/Blogs";

interface MainContentProps {
	blogs?: Blog[];
}

export default function MainContent({ blogs }: MainContentProps) {
	return (
		<main className="bg-black text-white min-h-64 flex items-center p-8 text-justify">
			{blogs ? (
				<div className="border border-blue w-full">
					{blogs.map((blog) => {
						return (
							<div className="border-b border-white" key={blog.id}>
								<div>{blog.title}</div>
								<div>{blog.summary}</div>
								<div>
									Published by {blog.news_site},{" "}
									{blog.published_at.split("T")[0]}
								</div>
							</div>
						);
					})}
				</div>
			) : (
				<div className="w-3/5">
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
