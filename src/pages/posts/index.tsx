import PostList from "../../components/PostList/PostList"
import PaginationPosts from "../../components/PaginationPosts/PaginationPosts"
import SortByPostTitle from "../../components/SortByPostTitle/SortByPostTitle"

import { useAppSelector } from "../../store/hooks"
import Loader from "../../components/UI/Loader"

const PostsIndexPage = () => {
  const { posts, loading, currentPage, postsPerPage } = useAppSelector(
    ({ postsState }) => postsState,
  )

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div
      className="vh-100 px-3 d-flex justify-content-center"
      style={{
        paddingTop: "6rem",
      }}
    >
      {loading || posts.length === 0 ? (
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
