import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import UserIconSVG from "./icon/svg"
import { Link } from "react-router-dom"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import Loader from "../UI/Loader/Loader"
import { Post } from "../../store/posts/types"
import { useAppSelector } from "../../store/hooks"

import classes from "./PostList.module.css"
import { Alert } from "react-bootstrap"

type PostListProps = {
  posts: Post[]
  loading: boolean
}

function PostList({ posts, loading }: PostListProps) {
  const { searchValue } = useAppSelector(
    ({ navigationState }) => navigationState,
  )

  const filteredPostTitle = posts.filter(post =>
    post.title.toLowerCase().includes(searchValue.toLowerCase()),
  )

  return (
    <div
      style={{
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-4"
        >
          {filteredPostTitle.length === 0 && (
            <Alert
              variant="danger"
              className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
            >
              <span className="fw-bold">Post not found!</span>
            </Alert>
          )}
          {filteredPostTitle.map(post => (
            <Col key={post.id}>
              <Card
                border="light"
                className="shadow bg-body-tertiary rounded"
              >
                <Card.Body>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={
                        <Tooltip
                          id={`tooltip-${post.id}`}
                          className="position-absolute"
                        >
                          {post.title}
                        </Tooltip>
                      }
                    >
                      <Link to={`/posts/${post.id}`}>
                        <Card.Title className={classes.CardTitle}>
                          {post.title}
                        </Card.Title>
                      </Link>
                    </OverlayTrigger>

                    <Link to={`/users/${post.userId}`}>
                      <UserIconSVG />
                    </Link>
                  </div>

                  <Card.Text className={classes.CardText}>
                    {post.body}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default PostList
