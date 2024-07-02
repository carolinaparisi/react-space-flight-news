import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

const apiUrl = "https://api.spaceflightnewsapi.net/v4/articles/";

interface ApiResponse {
	count: number;
	next: string;
	previous: string;
	results: Article[];
}

export interface Article {
	id: number;
	title: string;
	url: string;
	image_url: string;
	summary: string;
	published_at: string;
	news_site: string;
}

export default function Articles() {
	const [articles, setArticles] = useState<Article[]>([]);
	const [count, setCount] = useState<number>(0);
	const [next, setNext] = useState<string>("");
	const [previous, setPrevious] = useState<string>("");
	const [isLoading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await fetch(apiUrl);
			const jsonData: ApiResponse = await response.json();

			setArticles(jsonData.results);
			setCount(jsonData.count);
			setNext(jsonData.next);
			setPrevious(jsonData.previous);
			setLoading(false);
		};
		fetchData();
	}, []);

	const pagination = async (nextOrPrevious: string) => {
		setLoading(true);
		const response = await fetch(nextOrPrevious);
		const jsonData: ApiResponse = await response.json();

		setArticles(jsonData.results);
		setNext(jsonData.next);
		setPrevious(jsonData.previous);
		setLoading(false);
	};

	const filter = async (input: string) => {
		setLoading(true);
		const response = await fetch(`${apiUrl}?search=${input}`);
		const jsonData: ApiResponse = await response.json();

		setArticles(jsonData.results);
		setNext(jsonData.next);
		setPrevious(jsonData.previous);
		setCount(jsonData.count);
		setLoading(false);
	};

	return (
		<div className=" bg-black min-h-screen">
			<Header />
			{/*This ? used is a Safe Navigation operator, also called as Optional chaining  */}
			<Banner
				imageUrl={articles[0]?.image_url}
				title={
					isLoading === true ? "Loading..." : articles[0]?.title || "Sorry!"
				}
				summary={articles[0]?.summary}
				url={articles[0]?.url}
			/>
			<MainContent
				mainData={articles}
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
