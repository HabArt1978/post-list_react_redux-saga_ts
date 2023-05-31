import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"

function CommentsList() {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <i style={{ color: "#1E90FF" }}>Comments list</i>
        </Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Header>E-mail of the user who left a comment</Card.Header>
            <Card.Body>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default CommentsList
