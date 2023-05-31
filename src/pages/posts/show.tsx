import Card from "react-bootstrap/Card"
import { NavLink } from "react-router-dom"
import { BsChevronLeft } from "react-icons/bs"

const PostShowPage = () => {
  return (
    <div style={{ marginTop: "12rem" }}>
      <div
        style={{ maxWidth: "40rem" }}
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
        <Card style={{ display: "flex" }}>
          <Card.Body
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Card.Img
                src="holder.js/100px180"
                style={{ width: "50%", minWidth: "15rem", minHeight: "15rem" }}
              />
              <div
                style={{
                  width: "40%",
                  minWidth: "15rem",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1rem",
                }}
              >
                <Card.Title className="mb-2">user name: Bret</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  name: Leanne Graham
                </Card.Subtitle>
                <Card.Subtitle className="mb-4 text-muted">
                  city: Gwenborough
                </Card.Subtitle>{" "}
                <Card.Subtitle className="mb-2">contacts:</Card.Subtitle>
                <p style={{ margin: 0 }}>phone: 010-692-6593 x09125</p>
                <p style={{ margin: 0 }}>email: Shanna@melissa.tv</p>
                <p>website: anastasia.net</p>
                <Card.Subtitle className="mb-4">
                  company: Deckow-Crist
                </Card.Subtitle>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default PostShowPage
