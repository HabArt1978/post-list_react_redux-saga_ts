import { Container } from "react-bootstrap"
import DetailedUserData from "../../components/PostList/DetailedUserData/DetailedUserData"
import LinkToHomePage from "../../components/UI/LinkToHomePage"
import { useAppSelector } from "../../store/hooks"

const UserDetailsPage = () => {
  const { details, loading, errorText } = useAppSelector(
    ({ userDetailsState }) => userDetailsState,
  )
  return (
    <Container
      className="px-3 w-100 d-flex justyfy-content-center"
      style={{
        padding: "7rem 1rem 1rem 1rem",
      }}
    >
      <div
        className="d-flex flex-column mx-auto"
        style={{ minWidth: "50%" }}
      >
        <LinkToHomePage />
        <DetailedUserData
          details={details}
          loading={loading}
          errorText={errorText}
        />
      </div>
    </Container>
  )
}

export default UserDetailsPage
