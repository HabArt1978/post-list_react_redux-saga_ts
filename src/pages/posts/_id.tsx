import Card from "react-bootstrap/Card"
import CommentsList from "../../components/PostList/CommentsList/CommentsList"

import { useAppSelector } from "../../store/hooks"
import { useParams } from "react-router-dom"

import LinkToHomePage from "../../components/UI/LinkToHomePage"
import { Alert } from "react-bootstrap"

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

        {!postItem ? (
          <Alert
            variant="danger"
            className="shadow-lg p-3 bg-body-tertiary rounded flex-grow-1 m-auto"
            style={{ maxWidth: "800px" }}
          >
            <span className="fw-bold">Post not found !</span>
          </Alert>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  )
}

export default PostShowPage
