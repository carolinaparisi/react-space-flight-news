import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

export default function Home() {
	return (
		<div className=" bg-black">
			<Header />
			<Banner />
			<MainContent />
			<Footer />
		</div>
	);
}
