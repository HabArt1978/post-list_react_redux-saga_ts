import Spinner from "react-bootstrap/Spinner"

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center mx-auto my-3">
      <Spinner
        animation="border"
        variant="primary"
        role="status"
      ></Spinner>
      <span className="ms-3">Loading...</span>
    </div>
  )
}

export default Loader
