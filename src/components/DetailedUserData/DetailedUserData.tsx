import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../store/hooks"
import { useEffect } from "react"
import { setUserID } from "../../store/userDetails/actions"
import { GET_USER_DETAILS_SAGA } from "../../store/sagas/typesForSagas"
import { UserDetails } from "../../store/userDetails/types"

import Loader from "../UI/Loader/Loader"
import { Alert } from "react-bootstrap"

type UserDetailsProps = {
  details: UserDetails | null
  loading: boolean
  errorText: string | null
}

function DetailedUserData({ details, loading, errorText }: UserDetailsProps) {
  const params = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setUserID(Number(params.id)))
  }, [dispatch, params.id])

  useEffect(() => {
    dispatch({ type: GET_USER_DETAILS_SAGA })
  }, [dispatch])

  const userNotReceived = details === null

  if (errorText)
    return (
      <div style={{ minWidth: "50rem" }}>
        <Alert variant="danger">{errorText}</Alert>
      </div>
    )

  return (
    <div style={{ minWidth: "50rem" }}>
      {loading ? (
        <Loader />
      ) : (
        <Card style={{ maxWidth: "50rem" }}>
          {!userNotReceived && (
            <Card.Body>
              <Card.Title>
                <span style={{ marginRight: "0.5rem" }}>
                  <small>User name : </small>
                </span>
                <span>{details.username}</span>
              </Card.Title>
              <Card.Text>
                <span style={{ fontWeight: 500, marginRight: "0.5rem" }}>
                  name :
                </span>
                <span>{details.name}</span>
              </Card.Text>

              <ListGroup
                className="list-group-flush"
                style={{ borderTop: "1px solid black" }}
              >
                <ListGroup.Item>
                  <p style={{ fontWeight: 500 }}>contacts :</p>
                  <span>
                    <ul>
                      <li>email : {details.email}</li>
                      <li>phone : {details.phone}</li>
                      <li>website : {details.website}</li>
                    </ul>
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p style={{ fontWeight: 500 }}>address :</p>
                  <div>
                    <ul>
                      <li>city : {details.address.city}</li>
                      <li>street : {details.address.street}</li>
                      <li>suite : {details.address.suite}</li>
                      <li>zipcode : {details.address.zipcode}</li>
                      <li>
                        geo :
                        <ul>
                          <li>lat : {details.address.geo.lat}</li>
                          <li>lng : {details.address.geo.lng}</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p style={{ fontWeight: 500 }}>company :</p>
                  <div>
                    <ul>
                      <li>name : {details.company.name}</li>
                      <li>catchPhrase : {details.company.catchPhrase}</li>
                      <li>bs : {details.company.bs}</li>
                    </ul>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          )}
        </Card>
      )}
    </div>
  )
}

export default DetailedUserData
