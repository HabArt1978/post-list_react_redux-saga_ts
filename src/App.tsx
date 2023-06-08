import { Routes, Route, Navigate } from "react-router-dom"
import { useEffect } from "react"
import { useAppDispatch } from "./store/hooks"
import { GET_POSTS_SAGA } from "./store/sagas/typesFromSaga"

import NavigationBar from "./components/NavigationBar/NavigationBar"
import PostsIndexPage from "./pages/posts"
import PostShowPage from "./pages/posts/_id"
import AboutMePage from "./pages/aboutMe"
import UserDetailsPage from "./pages/userDetails"
import NotFoundPage from "./pages/404"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch({ type: GET_POSTS_SAGA })
  }, [dispatch])
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route
          path="/posts"
          element={<PostsIndexPage />}
        />
        <Route
          path="/posts/:id"
          element={<PostShowPage />}
        />
        <Route
          path="/about-me"
          element={<AboutMePage />}
        />
        <Route
          path="/users/:id"
          element={<UserDetailsPage />}
        />
        <Route
          path="/"
          element={<Navigate to={"/posts"} />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  )
}

export default App
