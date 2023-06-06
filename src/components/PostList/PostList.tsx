import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import UserIconSVG from "./icon/svg"
import { Link } from "react-router-dom"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import Pagination from "react-bootstrap/Pagination"

import CommentsList from "./CommentsList/CommentsList"
import Loader from "../UI/Loader/Loader"
import { useAppSelector } from "../../store/hooks"

import classes from "./PostList.module.css"

function PostList() {
  const posts = useAppSelector(({ postsState }) => postsState.posts)
  const isLoading = useAppSelector(({ postsState }) => postsState.isLoading)

  return (
    <div
      style={{
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        margin: "6rem auto 1rem",
      }}
    >
      {isLoading ? (
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
                      placement="auto"
                      overlay={
                        <Tooltip id={`tooltip-${post.id}`}>
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

                  <OverlayTrigger
                    placement="auto"
                    overlay={
                      <Tooltip id={`tooltip-${post.id}`}>{post.body}</Tooltip>
                    }
                  >
                    <Card.Text className={classes.CardText}>
                      {post.body}
                    </Card.Text>
                  </OverlayTrigger>
                  <CommentsList />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <div
        className="container p-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item active>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    </div>
  )
}

export default PostList
