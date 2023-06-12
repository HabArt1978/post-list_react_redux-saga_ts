import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { useEffect } from "react"
import { setUserID } from "../../store/userDetails/actions"
import { GET_USER_DETAILS_SAGA } from "../../store/sagas/typesForSagas"

function UserDetails() {
  const params = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUserID(Number(params.id)))
  }, [dispatch, params.id])

  useEffect(() => {
    dispatch({ type: GET_USER_DETAILS_SAGA })
  }, [dispatch])

  return (
    <Card style={{ width: "40rem" }}>
      <Card.Body>
        <Card.Title>
          <span style={{ marginRight: "0.5rem" }}>
            <small>User name : </small>
          </span>
          <span>Bret</span>
        </Card.Title>
        <Card.Text>
          <span style={{ fontWeight: 500, marginRight: "0.5rem" }}>name :</span>
          <span>Leanne Graham</span>
        </Card.Text>

        <ListGroup
          className="list-group-flush"
          style={{ borderTop: "1px solid black" }}
        >
          <ListGroup.Item>
            <p style={{ fontWeight: 500 }}>contacts :</p>
            <span>
              <ul>
                <li>email : Sincere@april.biz</li>
                <li>phone : 1-770-736-8031 x56442</li>
                <li>website : hildegard.org</li>
              </ul>
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <p style={{ fontWeight: 500 }}>address :</p>
            <div>
              <ul>
                <li>city : Gwenborough</li>
                <li>street : Kulas Light</li>
                <li>suite : Apt. 556</li>
                <li>zipcode : 92998-3874</li>
                <li>
                  geo :
                  <ul>
                    <li>lat : -37.3159</li>
                    <li>lat : -37.3159</li>
                  </ul>
                </li>

                <li>street : Kulas Light</li>
              </ul>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <p style={{ fontWeight: 500 }}>company :</p>
            <div>
              <ul>
                <li>name : Romaguera-Crona</li>
                <li>catchPhrase : Multi-layered client-server neural-net</li>
                <li>bs : harness real-time e-markets</li>
              </ul>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default UserDetails
