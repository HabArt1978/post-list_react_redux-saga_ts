import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import UserIconSVG from "./icon/svg"
import { Link } from "react-router-dom"

import CommentsList from "./CommentsList/CommentsList"

function PostList() {
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
        {Array.from({ length: 20 }).map((_, idx) => (
          <Col key={idx}>
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
                    <Card.Title style={{ margin: 0 }}>Post title</Card.Title>
                  </Link>

                  <Link to={"/users/1"}>
                    <UserIconSVG />
                  </Link>
                </div>

                <Card.Text style={{ marginBottom: "0.5rem" }}>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
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
