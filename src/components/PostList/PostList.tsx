import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import UserIconSVG from "./icon/svg"
import { Link } from "react-router-dom"

import CommentsList from "./CommentsList/CommentsList"
import { useAppSelector } from "../../store/hooks"

import classes from "./PostList.module.css"

function PostList() {
  const posts = useAppSelector(({ postsState }) => postsState.posts)
  return (
    <div
      style={{ maxWidth: "1200px", display: "flex", margin: "6rem auto 1rem" }}
    >
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-4"
      >
        {posts.map((post, idx) => (
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
                  <Link to={`/posts/${idx + 1}`}>
                    <Card.Title className={classes.CardTitle}>
                      {post.title}
                    </Card.Title>
                  </Link>

                  <Link to={"/users/1"}>
                    <UserIconSVG />
                  </Link>
                </div>

                <Card.Text className={classes.CardText}>{post.body}</Card.Text>
                <CommentsList />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PostList
