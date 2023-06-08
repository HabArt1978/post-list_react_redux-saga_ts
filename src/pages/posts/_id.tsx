import Card from "react-bootstrap/Card"
import { NavLink } from "react-router-dom"
import { BsChevronLeft } from "react-icons/bs"
import CommentsList from "../../components/PostList/CommentsList/CommentsList"

import { useAppSelector } from "../../store/hooks"
import { useParams } from "react-router-dom"

const PostShowPage = () => {
  const params = useParams()
  const postItem = useAppSelector(({ postsState }) =>
    postsState.posts.find(post => post.id === Number(params.id)),
  )

  return (
    <div style={{ marginTop: "7rem", padding: "0 1rem" }}>
      <div
        style={{ maxWidth: "1200px" }}
        className="mx-auto"
      >
        <div className="ms-2 mb-4">
          <NavLink
            to={"/posts"}
            style={{ margin: "1rem auto 0" }}
          >
            <BsChevronLeft className="me-1" />
            Back to posts
          </NavLink>
        </div>
        <Card>
          <Card.Header>{postItem?.title}</Card.Header>
          <Card.Body>
            <Card.Text>{postItem?.body}</Card.Text>
          </Card.Body>
        </Card>
        <div style={{ padding: "0.5rem" }}>
          <CommentsList />
        </div>
      </div>
    </div>
  )
}

export default PostShowPage
