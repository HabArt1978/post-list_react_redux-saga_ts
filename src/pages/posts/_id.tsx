import Card from "react-bootstrap/Card"
import CommentsList from "../../components/PostList/CommentsList/CommentsList"

import { useAppSelector } from "../../store/hooks"
import { useParams } from "react-router-dom"

import LinkToHomePage from "../../components/UI/Loader/LinkToHomePage/LinkToHomePage"

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
        <LinkToHomePage />

        <Card
          border="light"
          className="shadow p-3 mb-3 bg-body-tertiary rounded"
        >
          <Card.Header style={{ fontWeight: 500, fontSize: "1.1rem" }}>
            {postItem?.title}
          </Card.Header>
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
