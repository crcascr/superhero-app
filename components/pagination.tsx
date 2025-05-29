import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <button
        title={currentPage === 1 ? "No previous page" : "Previous page"}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="cursor-pointer p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <HiChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
          className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 ${
            page === currentPage
              ? "bg-blue-500 text-white shadow-lg"
              : page === "..."
              ? "text-gray-400 cursor-default"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        title={currentPage === totalPages ? "No next page" : "Next page"}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="cursor-pointer p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <HiChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  );
};
