import { set } from "zod";

export const generatePagination = (currentPage, totalPages) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, 4, "...", totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const colorType = (type) => {
  function setColor(color) {
    return <p className={`${color} rounded-lg pl-2 pr-2 capitalize`}>{type}</p>;
  }

  switch (type) {
    case "grass":
      return setColor("bg-green-500");

    case "poison":
      return setColor("bg-purple-500");

    case "fire":
      return setColor("bg-orange-500");

    case "normal":
      return setColor("bg-gray-500");

    case "bug":
      return setColor("bg-green-800");

    case "electric":
      return setColor("bg-yellow-500");
    case "dragon":
      return setColor("bg-blue-600");
    case "physical":
      return setColor("bg-red-500");
    case "fighting":
      return setColor("bg-red-700");
    case "ground":
      return setColor("bg-yellow-700");
    case "ghost":
      return setColor("bg-gray-200");
    case "water":
      return setColor("bg-blue-300");
    case "psychic":
      return setColor("bg-red-400");
    case "dark":
      return setColor("bg-gray-200");
    case "unknown":
      return setColor("bg-green-900");
    case "special":
      return setColor("bg-blue-800");
    case "flying":
      return setColor("bg-blue-200");
    case "rock":
      return setColor("bg-yellow-900");
    case "steel":
      return setColor("bg-blue-700");
    case "ice":
      return setColor("bg-green-300");
    case "fairy":
      return setColor("bg-pink-200");
    default:
      return setColor("bg-gray-200"); // Default color if type is not matched
  }
};
