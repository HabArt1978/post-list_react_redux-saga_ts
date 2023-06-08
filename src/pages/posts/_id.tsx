import Card from "react-bootstrap/Card"
import { NavLink } from "react-router-dom"
import { BsChevronLeft } from "react-icons/bs"
import CommentsList from "../../components/PostList/CommentsList/CommentsList"

const PostShowPage = () => {
  return (
    <div style={{ marginTop: "7rem", padding: "0 1rem" }}>
      <div
        style={{ maxWidth: "1200px" }}
        className="mx-auto"
      >
        <div className="ms-2 mb-2">
          <NavLink
            to={"/posts"}
            style={{ margin: "1rem auto 0" }}
          >
            <BsChevronLeft className="me-1" />
            Back to posts
          </NavLink>
        </div>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <CommentsList />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default PostShowPage
