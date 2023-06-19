import PostList from "../../components/PostList/PostList"
import PaginationPosts from "../../components/PaginationPosts/PaginationPosts"
import SortByPostTitle from "../../components/SortByPostTitle/SortByPostTitle"

import { useAppSelector } from "../../store/hooks"
import Loader from "../../components/UI/Loader"
import { Alert } from "react-bootstrap"

const PostsIndexPage = () => {
  const { posts, loading, currentPage, postsPerPage, errorText } =
    useAppSelector(({ postsState }) => postsState)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const noPosts = posts.length === 0

  return (
    <div
      className="vh-100 px-3 d-flex justify-content-center align-items-start"
      style={{
        paddingTop: "6rem",
      }}
    >
      {errorText && noPosts ? (
        <Alert
          variant="danger"
          className="shadow-lg p-3 bg-body-tertiary rounded flex-grow-1"
          style={{ maxWidth: "800px" }}
        >
          <span className="fw-bold">{errorText}</span>
        </Alert>
      ) : loading || noPosts ? (
        <Loader />
      ) : (
        <div className="h-100 d-flex flex-column justify-content-between">
          <SortByPostTitle />
          <PostList posts={currentPosts} />

          <PaginationPosts
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  )
}

export default PostsIndexPage
