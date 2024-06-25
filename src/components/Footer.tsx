import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Rocket } from "lucide-react";

export default function Footer() {
	return (
		<div className="bg-dark_gray text-xs h-20 flex items-center justify-center justify-around">
			<a
				className="text-white flex gap-1 items-end"
				href="https://www.linkedin.com/in/carolinaparisi/"
				target="_blank">
				<Linkedin className="size-5" />
				carolinaparisi
			</a>
			<a
				className="text-white flex gap-1 items-end"
				href="https://github.com/carolinaparisi"
				target="_blank">
				<Github className="size-5" />
				carolinaparisi
			</a>
			<a
				className="text-white flex gap-1 items-end"
				href="https://spaceflightnewsapi.net/"
				target="_blank">
				<Rocket className="size-5" />
				spaceflightnewsapi
			</a>
		</div>
	);
}
