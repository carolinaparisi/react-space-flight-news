import banner from "../assets/space-ship-banner.png";

interface BannerProps {
	imageUrl?: string;
	title?: string;
	summary?: string;
	url?: string;
}

export default function Banner({ imageUrl, title, summary, url }: BannerProps) {
	return (
		<div className="relative">
			<img
				src={imageUrl ? imageUrl : banner}
				className="opacity-20 w-full h-96 object-cover"
			/>
			<div className=" text-white absolute inset-y-0 left-0 px-8 h-full flex flex-col justify-center w-full gap-2">
				<h1 className=" text-5xl font-bold">
					{title ? (
						title
					) : (
						<>
							<span className="text-blue">React </span>
							Space News API
						</>
					)}
				</h1>
				{summary ? (
					<div className=" overflow-hidden whitespace-nowrap text-ellipsis">
						{summary}
					</div>
				) : (
					""
				)}
				{url ? (
					<button
						className="flex mt-4"
						onClick={() => {
							console.log(url);
						}}>
						READ BLOG
					</button>
				) : (
					""
				)}
			</div>
		</div>
	);
}
