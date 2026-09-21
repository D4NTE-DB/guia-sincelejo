import Pagination from 'react-bootstrap/Pagination';

const CustomPagination = ({ totalPages, page, setPage }) => {
  const MAX_VISIBLE_PAGES = 4;

  if (totalPages <= 1) return null;

  const visiblePages = Math.min(MAX_VISIBLE_PAGES, totalPages);

  let startPage, endPage;

  if (totalPages <= MAX_VISIBLE_PAGES) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (page <= Math.ceil(visiblePages / 2)) {
      startPage = 1;
      endPage = visiblePages;
    } else if (page >= totalPages - Math.floor(visiblePages / 2)) {
      startPage = totalPages - visiblePages + 1;
      endPage = totalPages;
    } else {
      startPage = page - Math.floor(visiblePages / 2);
      endPage = startPage + visiblePages - 1;
    }
  }

  const items = [];

  items.push(
    <Pagination.Prev
      key="prev"
      onClick={() => page > 1 && setPage(page - 1)}
      disabled={page === 1}
    />
  );

  if (startPage > 1) {
    items.push(
      <Pagination.Item key={1} onClick={() => setPage(1)} active={page === 1}>
        1
      </Pagination.Item>
    );
    if (startPage > 2) {
      items.push(
        <Pagination.Ellipsis
          key="start-ellipsis"
          onClick={() => setPage(startPage - 1)}
        />
      );
    }
  }

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

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      items.push(
        <Pagination.Ellipsis
          key="end-ellipsis"
          onClick={() => setPage(endPage + 1)}
        />
      );
    }
    items.push(
      <Pagination.Item
        key={totalPages}
        onClick={() => setPage(totalPages)}
        active={page === totalPages}
      >
        {totalPages}
      </Pagination.Item>
    );
  }

  items.push(
    <Pagination.Next
      key="next"
      onClick={() => page < totalPages && setPage(page + 1)}
      disabled={page === totalPages}
    />
  );

  return <Pagination>{items}</Pagination>;
};

export default CustomPagination;
