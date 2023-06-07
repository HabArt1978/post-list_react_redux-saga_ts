import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import UserIconSVG from "./icon/svg"
import { Link } from "react-router-dom"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

import Loader from "../UI/Loader/Loader"

import { Post } from "../../store/posts/types"

import classes from "./PostList.module.css"

type PostListProps = {
  posts: Post[]
  loading: boolean
}

function PostList({ posts, loading }: PostListProps) {
  return (
    <div
      style={{
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        margin: "6rem auto 1rem",
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
          {posts.map(post => (
            <Col key={post.id}>
              <Card border="secondary">
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

                    <Link to={"/users/1"}>
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
