import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

export default function Home() {
	return (
		<div className="bg-black min-h-screen flex flex-col justify-between">
			<Header />
			<Banner />
			<MainContent />
			<Footer />
		</div>
	);
}
