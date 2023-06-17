import Pagination from "react-bootstrap/Pagination"

import { useAppDispatch } from "../../store/hooks"

import {
  setCurrentPage,
  setPrevPage,
  setNextPage,
} from "../../store/posts/actions"
import classes from "./PaginationPosts.module.css"

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

  return (
    <div className="d-flex justify-content-center p-3">
      <Pagination className={classes.pagination}>
        {currentPage > 1 && (
          <Pagination.Item onClick={() => dispatch(setCurrentPage(1))}>
            1
          </Pagination.Item>
        )}
        {currentPage > 3 && <Pagination.Ellipsis />}
        {currentPage > 2 && (
          <Pagination.Item
            onClick={() => dispatch(setPrevPage())}
            disabled={currentPage === 1}
          >
            {currentPage - 1}
          </Pagination.Item>
        )}

        <Pagination.Item active>{currentPage}</Pagination.Item>
        {currentPage < pageNumbers.length - 1 && (
          <Pagination.Item
            onClick={() => dispatch(setNextPage())}
            disabled={currentPage === pageNumbers.length}
          >
            {currentPage + 1}
          </Pagination.Item>
        )}
        {currentPage < pageNumbers.length - 2 && <Pagination.Ellipsis />}
        {currentPage < pageNumbers.length && (
          <Pagination.Item
            onClick={() => dispatch(setCurrentPage(pageNumbers.length))}
          >
            {pageNumbers.length}
          </Pagination.Item>
        )}
      </Pagination>
    </div>
  )
}

export default PaginationPosts
