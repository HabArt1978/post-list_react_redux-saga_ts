import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import UserIconSVG from "./svg"
import { Link } from "react-router-dom"

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
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Link to={"/user-details"}>
                    <UserIconSVG />
                  </Link>

                  <Card.Title style={{ margin: "auto 1rem" }}>
                    User name
                  </Card.Title>
                </div>

                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default PostList
