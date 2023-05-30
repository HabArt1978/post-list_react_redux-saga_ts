import Button from "react-bootstrap/esm/Button"
import NotFoundImageSvg from "./image/notFoundImageSVG"
import { Link } from "react-router-dom"
import GoBackIconSVG from "./icon/goBackIconSVG"

const NotFoundPage = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(35,35,51)",
        backgroundImage: `linear-gradient(0deg, rgba(35,35,51,1) 0%, rgba(97,97,121,1) 35%, rgba(166,170,171,1) 100%)`,
        height: "100vh",
      }}
    >
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
          <Link to="/post-list">
            <Button
              variant="warning"
              style={{
                zIndex: "1",
                marginTop: "-22rem",
                textTransform: "uppercase",
              }}
            >
              <span style={{ display: "flex", textAlign: "center" }}>
                <GoBackIconSVG />
                Go to the list of posts
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
