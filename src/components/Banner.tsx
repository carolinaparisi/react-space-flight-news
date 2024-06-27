import banner from "../assets/space-ship-banner.png";

export default function Banner() {
	return (
		<div className="relative">
			<img src={banner} className="opacity-20" />
			<h1 className="text-white absolute inset-y-36 left-8 text-5xl font-bold">
				<span className="text-blue">React </span>
				Space News API
			</h1>
		</div>
	);
}
