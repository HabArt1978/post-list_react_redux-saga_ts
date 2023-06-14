import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Loader from "../UI/Loader"
import { useAppSelector, useAppDispatch } from "../../store/hooks"
import { useParams } from "react-router-dom"
import { GET_COMMENTS_SAGA } from "../../store/sagas/typesForSagas"
import { useState, useEffect } from "react"
import { setParamsID } from "../../store/comments/actions"

function CommentsList() {
  const [isOpen, setIsOpen] = useState(false)

  const params = useParams()
  const dispatch = useAppDispatch()

  const { loading, comments } = useAppSelector(
    ({ commentsState }) => commentsState,
  )

  useEffect(() => {
    dispatch(setParamsID(Number(params.id)))
  }, [dispatch, params.id])

  const noСomments =
    comments.filter(v => v.postId === Number(params.id)).length === 0

  useEffect(() => {
    if (isOpen && noСomments) {
      dispatch({ type: GET_COMMENTS_SAGA })
    }
  }, [isOpen, noСomments, dispatch])

  return (
    <Accordion
      flush
      className="shadow bg-body-tertiary rounded"
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={() => setIsOpen(!isOpen)}>
          <i style={{ color: "#1E90FF" }}>Comments list</i>
        </Accordion.Header>
        <Accordion.Body>
          {loading ? (
            <Loader />
          ) : (
            comments.map(comment => (
              <Card className="mt-2">
                <Card.Header
                  style={{ backgroundColor: "#faf7de", fontWeight: 500 }}
                >
                  {comment.email}
                </Card.Header>
                <Card.Body>
                  <Card.Text>{comment.body}</Card.Text>
                </Card.Body>
              </Card>
            ))
          )}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default CommentsList
