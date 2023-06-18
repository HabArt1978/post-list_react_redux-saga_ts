import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import UserIconSVG from "./icon/svg"
import { Link } from "react-router-dom"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

import { Post } from "../../store/posts/types"

import classes from "./PostList.module.css"

type PostListProps = {
  posts: Post[]
}

function PostList({ posts }: PostListProps) {
  return (
    <div
      className="d-flex flex-direction-column align-items-start flex-grow-1"
      style={{
        maxWidth: "1200px",
      }}
    >
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-3"
      >
        {posts.map(post => (
          <Col key={post.id}>
            <Card
              border="light"
              className="shadow bg-body-tertiary rounded"
            >
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
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

                <Card.Text className={classes.CardText}>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PostList
