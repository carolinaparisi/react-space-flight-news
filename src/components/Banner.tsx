import { ExternalLink } from "lucide-react";
import banner from "../assets/space-ship-banner.png";
import { Link } from "react-router-dom";

interface BannerProps {
	imageUrl?: string;
	title?: string;
	summary?: string;
	url?: string;
	isLoading: boolean;
	isFiltered: boolean;
	isOrdered: boolean;
}

export default function Banner({
	imageUrl,
	title,
	summary,
	url,
	isLoading,
	isFiltered,
	isOrdered,
}: BannerProps) {
	return (
		<div className="relative">
			<img
				src={imageUrl && !isLoading ? imageUrl : banner}
				className="opacity-20 w-full h-96 object-cover"
			/>
			<div className=" text-white absolute inset-y-0 left-0 px-8 h-full flex flex-col justify-center w-full gap-3">
				<h1
					className={`${title === "Sorry!" && "text-blue"} text-5xl font-bold`}>
					{title ? (
						title
					) : (
						<>
							<span className="text-blue">React </span>
							Space News API
						</>
					)}
				</h1>
				{summary && !isFiltered && !isOrdered ? (
					<div className=" overflow-hidden whitespace-nowrap text-ellipsis">
						{summary}
					</div>
				) : (
					""
				)}
				{url && !isLoading ? (
					<Link
						className="flex mt-4 bg-blue w-fit p-2 rounded-md gap-2"
						target="_blank"
						to={url}>
						READ BLOG <ExternalLink className="size-5" />
					</Link>
				) : (
					""
				)}
			</div>
		</div>
	);
}
