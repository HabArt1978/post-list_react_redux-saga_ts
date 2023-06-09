import Spinner from "react-bootstrap/Spinner"

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "3rem 0",
      }}
    >
      <Spinner
        animation="border"
        variant="primary"
        role="status"
      ></Spinner>
      <span style={{ marginLeft: "1rem" }}>Loading...</span>
    </div>
  )
}

export default Loader
