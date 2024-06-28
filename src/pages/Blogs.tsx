import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

interface ApiResponse {
	count: number;
	results: Blog[];
}

export interface Blog {
	id: number;
	title: string;
	url: string;
	image_url: string;
	summary: string;
	published_at: string;
	news_site: string;
}

export default function Blogs() {
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				"https://api.spaceflightnewsapi.net/v4/blogs/"
			);
			const jsonData: ApiResponse = await response.json();
			setBlogs(jsonData.results);
			console.log(jsonData);
		};
		fetchData();
	}, []);

	return (
		<div className=" bg-black min-h-screen">
			<Header />
			{/*This ? used is a Safe Navigation operator, also called as Optional chaining  */}
			<Banner
				imageUrl={blogs[0]?.image_url}
				title={blogs[0]?.title || "Loading..."}
				summary={blogs[0]?.summary}
				url={blogs[0]?.url}
			/>
			<MainContent blogs={blogs} />
			<Footer />
		</div>
	);
}
