import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({ totalPages, page, setPage }) => {
  const MAX_VISIBLE_PAGES = 5;  // Number of pages to display at a time

  const getPaginationItems = () => {
    let items = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > MAX_VISIBLE_PAGES) {
      // Calculating the first display when the component mounts or for low page numbers
      if (page <= 3 || totalPages <= 5) {
        // Showing from page 1 to page 5 (or less if totalPages < 5)
        endPage = Math.min(5, totalPages);
      } else if (page >= totalPages - 2) {
        // Near the end of the pagination range
        startPage = totalPages - 4;
      } else {
        // Middle pages, showing two pages before and after the current page
        startPage = page - 2;
        endPage = page + 2;
      }
    }

    // Generate the pagination items for pages
    for (let num = startPage; num <= endPage; num++) {
      items.push(
        <Pagination.Item
          key={num}
          active={page === num}
          onClick={() => setPage(num)}
        >
          {num}
        </Pagination.Item>
      );
    }

    // Add ellipsis and navigation arrows if necessary
    if (startPage > 1) {
      items.unshift(
        <Pagination.Item key="first" onClick={() => setPage(1)}>1</Pagination.Item>,
        <Pagination.Ellipsis key="ellipsisLeft" onClick={() => setPage(startPage - 1)} />
      );
    }

    if (endPage < totalPages) {
      items.push(
        <Pagination.Ellipsis key="ellipsisRight" onClick={() => setPage(endPage + 1)} />,
        <Pagination.Item key="last" onClick={() => setPage(totalPages)}>{totalPages}</Pagination.Item>
      );
    }

    return items;
  };

  return (
    window.innerWidth <= 1000 && <Pagination>
      {getPaginationItems()}
    </Pagination>
  );
};

export default CustomPagination;
