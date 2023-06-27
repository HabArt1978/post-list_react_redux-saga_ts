import Button from "react-bootstrap/esm/Button"
import NotFoundImageSvg from "./image/notFoundImageSVG"
import { Link } from "react-router-dom"
import { BsHouseDoor } from "react-icons/bs"

const NotFoundPage = () => {
  return (
    <div className="vh-100 pt-5">
      <div className="d-flex flex-column align-items-center h-100">
        <NotFoundImageSvg />
        <div>
          <Link to="/posts">
            <Button
              className="text-uppercase"
              variant="secondary"
              style={{
                marginTop: "-10rem",
              }}
            >
              <span className="d-flex">
                <BsHouseDoor
                  size={20}
                  className="me-2"
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
