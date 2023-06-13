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
      <Alert
        variant="danger"
        className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
      >
        <span className="fw-bold">{errorText}</span>
      </Alert>
    )

  return (
    <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
      {loading ? (
        <Loader />
      ) : (
        <Card>
          {!userNotReceived && (
            <Card.Body>
              <Card.Title>
                <span className="me-1">
                  <small>User name : </small>
                </span>
                <span>{details.username}</span>
              </Card.Title>
              <Card.Text>
                <span className="fw-semibold me-1">name : </span>
                <span>{details.name}</span>
              </Card.Text>

              <ListGroup className="list-group-flush border-top border-2 border-secondary">
                <ListGroup.Item>
                  <p className="fw-semibold">contacts :</p>
                  <span>
                    <ul>
                      <li>email : {details.email}</li>
                      <li>phone : {details.phone}</li>
                      <li>website : {details.website}</li>
                    </ul>
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <p className="fw-semibold">address :</p>
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
                  <p className="fw-semibold">company :</p>
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
