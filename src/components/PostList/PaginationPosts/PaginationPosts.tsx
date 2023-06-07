import Pagination from "react-bootstrap/Pagination"

import { useAppDispatch } from "../../../store/hooks"

import {
  setCurrentPage,
  setPrevPage,
  setNextPage,
} from "../../../store/posts/actions"

type PaginationPostsProps = {
  postsPerPage: number
  totalPosts: number
  currentPage: number
}

function PaginationPosts({
  postsPerPage,
  totalPosts,
  currentPage,
}: PaginationPostsProps) {
  const dispatch = useAppDispatch()

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  // const startPoint = pageNumbers.length / 2 - 2
  // const endPoint = startPoint + 5

  return (
    <div
      className="container p-4"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Pagination>
        <Pagination.First onClick={() => dispatch(setCurrentPage(1))} />
        <Pagination.Prev
          onClick={() => dispatch(setPrevPage())}
          disabled={currentPage === 1}
        />
        {pageNumbers.map((num, idx) => (
          <>
            {num === 2 || num === pageNumbers.length - 1 ? (
              <Pagination.Ellipsis />
            ) : (
              <Pagination.Item
                key={`pageNum ${idx}`}
                onClick={() => dispatch(setCurrentPage(num))}
                active={currentPage === num}
              >
                {num}
              </Pagination.Item>
            )}
          </>
        ))}
        <Pagination.Next
          onClick={() => dispatch(setNextPage())}
          disabled={currentPage === pageNumbers.length}
        />
        <Pagination.Last
          onClick={() => dispatch(setCurrentPage(pageNumbers.length))}
        />
      </Pagination>
    </div>
  )
}

export default PaginationPosts

{
  /* <Pagination.Ellipsis /> */
}
