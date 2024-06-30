import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface PaginationProps {
	previous?: string;
	next?: string;
	pagination?: (nextOrPrevious: string) => void;
}

export default function Pagination({
	previous,
	next,
	pagination,
}: PaginationProps) {
	return (
		<div className="flex gap-4 pb-8">
			<button
				className="flex mt-4 bg-blue w-fit p-2 rounded-md gap-2"
				onClick={() => {
					{
						if (pagination && previous) {
							pagination(previous);
						}
					}
				}}>
				<ArrowBigLeft className="size-5" />
			</button>
			<p className="flex items-center mt-4">page</p>
			<button
				className="flex mt-4 bg-blue w-fit p-2 rounded-md gap-2"
				onClick={() => {
					{
						if (pagination && next) {
							pagination(next);
						}
					}
				}}>
				<ArrowBigRight className="size-5" />
			</button>
		</div>
	);
}
