import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks"
import { useEffect } from "react"
import { setUserID, setError } from "../../../store/userDetails/actions"
import { GET_USER_DETAILS_SAGA } from "../../../store/sagas/typesForSagas"
import { UserDetails } from "../../../store/userDetails/types"

import Loader from "../../UI/Loader"
import { Alert } from "react-bootstrap"
import UserPostList from "./UserPostList/UserPostList"

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
    return () => {
      dispatch(setError(null))
    }
  }, [dispatch, params.id])

  useEffect(() => {
    dispatch({ type: GET_USER_DETAILS_SAGA })
  }, [dispatch])

  const noUser = details === null

  if (noUser && errorText)
    return (
      <Alert
        variant="danger"
        className="shadow-lg p-3 mb-3 bg-body-tertiary rounded"
      >
        <span className="fw-bold">{errorText}</span>
      </Alert>
    )

  if (noUser || loading) return <Loader />

  return (
    <div
      className="shadow p-3 mb-3 bg-body-tertiary rounded"
      style={{ maxWidth: "800px" }}
    >
      <Card>
        <Card.Body>
          <Card.Title>
            <span className="me-1">
              <small>User name : </small>
            </span>
            <span>{details.username}</span>
          </Card.Title>
          <Card.Text className="mb-2">
            <span className="fw-semibold me-1">name : </span>
            <span>{details.name}</span>
          </Card.Text>
          <Card.Text className="mb-3">
            <a href="#user_posts">User posts</a>
          </Card.Text>

          <ListGroup className="list-group-flush border-top border-2 border-secondary">
            <ListGroup.Item>
              <p className="fw-semibold">contacts :</p>
              <ul>
                <li>email : {details.email}</li>
                <li>phone : {details.phone}</li>
                <li>website : {details.website}</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="fw-semibold">address :</p>
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
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="fw-semibold">company :</p>
              <ul>
                <li>name : {details.company.name}</li>
                <li>catchPhrase : {details.company.catchPhrase}</li>
                <li>bs : {details.company.bs}</li>
              </ul>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <UserPostList />
    </div>
  )
}

export default DetailedUserData
