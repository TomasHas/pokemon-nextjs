"use client";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import clsx from "clsx";
import { generatePagination } from "../lib/utils";

function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const allPages = generatePagination(currentPage, totalPages);
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  return (
    <div className="flex flex-row w-full justify-between ">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className="lg:flex hidden">
        {allPages.map((page, index) => {
          let position; //"first" | "last" | "single" | "middle" | undefined;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";
          return (
            <div key={page} className="shadow-xl">
              <PaginationNumber
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            </div>
          );
        })}
      </div>
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage === totalPages}
      />
    </div>
  );
}
export default Pagination;

function PaginationNumber({ page, href, isActive, position }) {
  const className = clsx(
    "flex h-10 w-10 items-center  justify-center text-sm border rounded-md ",
    {
      "rounded-md": position === "first" || position === "single",
      "rounded-md": position === "last" || position === "single",
      "z-10 bg-red-500  text-white": isActive,
      "hover:border-red-500 hover:border-2 rounded-md":
        !isActive && position !== "middle",
      "text-gray-300 rounded-md": position === "middle",
    }
  );
  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}
const PaginationArrow = ({ href, direction, isDisabled }) => {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center bg-white rounded-md shadow-xl",
    {
      "pointer-events-none text-gray-300 ": isDisabled,
      "hover:bg-red-400 active:bg-red-500": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );
  const icon = direction === "left" ? <FiChevronLeft /> : <FiChevronRight />;
  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href.toString()}>
      {icon}
    </Link>
  );
};
