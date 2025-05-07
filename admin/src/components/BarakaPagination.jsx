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
          <PaginationPrevious onClick={handleLeft} className="cursor-pointer" />
        </PaginationItem>

        {pages.map((item) => (
          <PaginationItem key={item}>
            <PaginationLink
              className="cursor-pointer"
              isActive={item === currentPage}
              onClick={() => handlePageClick(item)}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext onClick={handleRight} className="cursor-pointer" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BarakaPagination;
