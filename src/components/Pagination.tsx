import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface PaginationProps {
	count?: number;
	previous?: string;
	next?: string;
	pagination?: (nextOrPrevious: string) => void;
}

export default function Pagination({
	count,
	previous,
	next,
	pagination,
}: PaginationProps) {
	const initialOffset = next?.split("?")[1].split("&")[1].split("=")[1];
	const offset = initialOffset ? parseInt(initialOffset) : 1;

	const limitPerPage = 10;
	const pages = count && Math.ceil(count / limitPerPage);

	const currentPage = next === null ? 127 : offset / limitPerPage;

	const verifyFirstPage = (page: number) => {
		if (page === 1) {
			return "flex mt-4 bg-blue w-fit p-2 rounded-md gap-2 opacity-60";
		}
		return "flex mt-4 bg-blue w-fit p-2 rounded-md gap-2";
	};

	const verifyLastPage = (page: number) => {
		if (page === pages) {
			return "flex mt-4 bg-blue w-fit p-2 rounded-md gap-2 opacity-60";
		}
		return "flex mt-4 bg-blue w-fit p-2 rounded-md gap-2";
	};

	return (
		<div className="flex gap-4 pb-8">
			<button
				className={verifyFirstPage(currentPage)}
				onClick={() => {
					{
						if (pagination && previous) {
							pagination(previous);
						}
					}
				}}>
				<ArrowBigLeft className="size-5" />
			</button>
			<p className="flex items-center mt-4">
				{currentPage} of {pages}
			</p>
			<button
				className={verifyLastPage(currentPage)}
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
