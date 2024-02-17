"use client";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import clsx from "clsx";

function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  // const allPages = generatePagination(currentPage, totalPages);

  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="flex flex-row w-full justify-between">
      <PaginationArrow
        direction="left"
        href={createPageUrl(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <PaginationArrow
        direction="right"
        href={createPageUrl(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      />
    </div>
  );
}

export default Pagination;

const PaginationArrow = ({ href, direction, isDisabled }) => {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center rounded-md border",
    {
      "pointer-events-none text-gray-300": isDisabled,
      "hover:bg-gray-100": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  const icon =
    direction === "left" ? (
      <FiChevronLeft className="w-4" />
    ) : (
      <FiChevronRight className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href.toString()}>
      {icon}
    </Link>
  );
};
