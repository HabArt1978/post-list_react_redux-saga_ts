import { Card, Container } from "react-bootstrap"
import UserIconSVG from "../../icon/svg"
import { useAppSelector } from "../../../../store/hooks"

const UserPostList = () => {
  const { userID, details } = useAppSelector(
    ({ userDetailsState }) => userDetailsState,
  )
  const { posts } = useAppSelector(({ postsState }) => postsState)

  const userPostList = posts.filter(post => post.userId === userID)

  return (
    <div
      className="d-flex flex-column mt-3"
      style={{ scrollMarginTop: "90px" }}
      id="user_posts"
    >
      <Container className="p-0">
        <Card className="pb-2">
          <Card.Header className="d-flex">
            <UserIconSVG />
            <div className="ms-3 align-self-center">
              <b>{`${details?.username}'s `}</b>posts
            </div>
          </Card.Header>
          {userPostList.map(post => (
            <div key={post.id}>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
              {userPostList.length > post.id && (
                <div className="px-3">
                  <hr className="m-0" />
                </div>
              )}
            </div>
          ))}
        </Card>
      </Container>
    </div>
  )
}

export default UserPostList
