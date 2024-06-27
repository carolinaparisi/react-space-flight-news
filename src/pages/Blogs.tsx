import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";

export default function Blogs() {
	return (
		<div className=" bg-black min-h-screen">
			<Header />
			<Banner />
			<MainContent />
			<Footer />
		</div>
	);
}
