import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const apiUrl = "https://api.spaceflightnewsapi.net/v4/blogs/";

interface ApiResponse {
	count: number;
	next: string;
	previous: string;
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
	const [count, setCount] = useState<number>(0);
	const [next, setNext] = useState<string>("");
	const [previous, setPrevious] = useState<string>("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(apiUrl);
			const jsonData: ApiResponse = await response.json();
			setBlogs(jsonData.results);
			setCount(jsonData.count);
			setNext(jsonData.next);
			setPrevious(jsonData.previous);
		};
		fetchData();
	}, []);

	const pagination = async (nextOrPrevious: string) => {
		const response = await fetch(nextOrPrevious);
		const jsonData: ApiResponse = await response.json();
		setBlogs(jsonData.results);
		setNext(jsonData.next);
		setPrevious(jsonData.previous);
	};

	const filter = async (input: string) => {
		const response = await fetch(`${apiUrl}?search=${input}`);
		const jsonData: ApiResponse = await response.json();
		setBlogs(jsonData.results);
		setNext(jsonData.next);
		setPrevious(jsonData.previous);
		setCount(jsonData.count);
	};

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
			<MainContent
				blogs={blogs}
				count={count}
				next={next}
				previous={previous}
				pagination={pagination}
				filter={filter}
			/>
			<Footer />
		</div>
	);
}
