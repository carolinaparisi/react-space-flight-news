import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const apiUrl = `${import.meta.env.VITE_BASE_URL}/blogs/`;

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
	const [isLoading, setLoading] = useState<boolean>(false);
	const [isFiltered, setFiltered] = useState<boolean>(false);
	const [isOrdered, setOrdered] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setFiltered(false);
			const response = await fetch(
				`${apiUrl}${isOrdered ? "?ordering=published_at" : ""}`
			);
			const jsonData: ApiResponse = await response.json();

			setBlogs(jsonData.results);
			setCount(jsonData.count);
			setNext(jsonData.next);
			setPrevious(jsonData.previous);
			setLoading(false);
		};
		fetchData();
	}, [isOrdered]);

	const pagination = async (nextOrPrevious: string) => {
		setLoading(true);
		const response = await fetch(nextOrPrevious);
		const jsonData: ApiResponse = await response.json();

		setBlogs(jsonData.results);
		setNext(jsonData.next);
		setPrevious(jsonData.previous);
		setLoading(false);
	};

	const filter = async (input: string) => {
		setLoading(true);
		setOrdered(false);
		const response = await fetch(`${apiUrl}?search=${input}`);
		const jsonData: ApiResponse = await response.json();

		setBlogs(jsonData.results);
		setNext(jsonData.next);
		setPrevious(jsonData.previous);
		setCount(jsonData.count);
		setLoading(false);
		setFiltered(true);
	};

	return (
		<div className=" bg-black min-h-screen">
			<Header />
			{/*This ? used is a Safe Navigation operator, also called as Optional chaining  */}
			<Banner
				imageUrl={blogs[0]?.image_url}
				title={isLoading ? "Loading..." : blogs[0]?.title || "Sorry!"}
				summary={
					isLoading
						? ""
						: blogs[0]?.summary || "We couldn't find anything with this word..."
				}
				url={blogs[0]?.url}
				isLoading={isLoading}
				isFiltered={isFiltered}
				isOrdered={isOrdered}
			/>
			<MainContent
				mainData={blogs}
				count={count}
				next={next}
				previous={previous}
				pagination={pagination}
				filter={filter}
				isLoading={isLoading}
				isFiltered={isFiltered}
				isOrdered={isOrdered}
				setOrdered={setOrdered}
			/>
			<Footer />
		</div>
	);
}
