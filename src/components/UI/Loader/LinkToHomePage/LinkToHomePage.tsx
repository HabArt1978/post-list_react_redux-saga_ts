import { BsChevronLeft } from "react-icons/bs"
import { NavLink } from "react-router-dom"

function LinkToHomePage() {
  return (
    <div className="ms-2 mb-4">
      <NavLink to={"/posts"}>
        <BsChevronLeft className="me-1" />
        Back to posts
      </NavLink>
    </div>
  )
}

export default LinkToHomePage
