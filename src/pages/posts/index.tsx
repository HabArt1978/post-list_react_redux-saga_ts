import PostList from "../../components/PostList/PostList"
import PaginationPosts from "../../components/PostList/PaginationPosts/PaginationPosts"

import { useAppSelector } from "../../store/hooks"

const PostsIndexPage = () => {
  const { posts, loading, currentPage, postsPerPage } = useAppSelector(
    ({ postsState }) => postsState,
  )

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="px-3">
      <PostList
        posts={currentPosts}
        loading={loading}
      />

      <PaginationPosts
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
      />
    </div>
  )
}

export default PostsIndexPage
