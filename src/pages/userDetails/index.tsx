import DetailedUserData from "../../components/DetailedUserData/DetailedUserData"
import LinkToHomePage from "../../components/UI/Loader/LinkToHomePage/LinkToHomePage"
import { useAppSelector } from "../../store/hooks"

const UserDetailsPage = () => {
  const { details, loading, errorText } = useAppSelector(
    ({ userDetailsState }) => userDetailsState,
  )
  return (
    <div
      className="px-3 d-flex flex-column align-items-center"
      style={{
        padding: "7rem 1rem 1rem 1rem",
      }}
    >
      <div>
        <LinkToHomePage />
        <DetailedUserData
          details={details}
          loading={loading}
          errorText={errorText}
        />
      </div>
    </div>
  )
}

export default UserDetailsPage
