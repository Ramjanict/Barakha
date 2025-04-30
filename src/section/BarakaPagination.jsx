import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BarakaPagination = ({
  totalPost,
  postPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalPost / postPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleLeft = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleRight = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <Pagination className="py-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className="cursor-pointer "
            onClick={handleLeft}
          />
        </PaginationItem>

        {pages.map((page) => {
          // Show first, last, current, and neighbors
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  className="cursor-pointer "
                  isActive={page === currentPage}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          } else if (
            (page === currentPage - 2 && page > 1) ||
            (page === currentPage + 2 && page < totalPages)
          ) {
            return (
              <PaginationItem key={`ellipsis-${page}`}>
                <PaginationEllipsis className="cursor-pointer " />
              </PaginationItem>
            );
          }
          return null;
        })}

        <PaginationItem>
          <PaginationNext className="cursor-pointer " onClick={handleRight} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BarakaPagination;
