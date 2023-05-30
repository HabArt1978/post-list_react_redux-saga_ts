import { Routes, Route, Navigate } from "react-router-dom"

import NavigationBar from "./components/NavigationBar/NavigationBar"
import PostListPage from "./pages/postList"
import AboutMePage from "./pages/aboutMe"
import UserDetailsPage from "./pages/userDetails"
import NotFoundPage from "./pages/404"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route
          path="/post-list"
          element={<PostListPage />}
        />
        <Route
          path="/about-me"
          element={<AboutMePage />}
        />
        <Route
          path="/user-details"
          element={<UserDetailsPage />}
        />
        <Route
          path="/"
          element={<Navigate to={"/post-list"} />}
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
