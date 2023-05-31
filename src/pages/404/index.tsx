import Button from "react-bootstrap/esm/Button"
import NotFoundImageSvg from "./image/notFoundImageSVG"
import { Link } from "react-router-dom"
import { BsHouseDoor } from "react-icons/bs"

const NotFoundPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          height: "100vh",
        }}
      >
        <NotFoundImageSvg />
        <div>
          <Link to="/posts">
            <Button
              variant="secondary"
              style={{
                zIndex: "1",
                marginTop: "-22rem",
                textTransform: "uppercase",
              }}
            >
              <span style={{ display: "flex", textAlign: "center" }}>
                <BsHouseDoor
                  size={20}
                  className="d-inline-block me-2"
                />
                Get back to the home page
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
